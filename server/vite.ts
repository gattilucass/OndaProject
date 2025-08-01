import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger, defineConfig } from "vite"; // Añadido defineConfig
import { type Server } from "http";
// REMOVIDA: import viteConfig from "../vite.config"; // Ya no se importa, la configuración estará aquí
import { nanoid } from "nanoid";
import react from "@vitejs/plugin-react"; // Necesario para el plugin de React
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"; // Necesario para el plugin

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// DEFINICIÓN DE LA CONFIGURACIÓN DE VITE MOVIDA AQUÍ
const viteConfig = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Nota: el plugin cartographer solo se incluye en desarrollo y si REPL_ID está definido.
    // En producción en Vercel, NODE_ENV es 'production' por defecto, por lo que este bloque no se activará.
    // Si necesitas que se active en Vercel (por ejemplo, para previews), asegúrate de que REPL_ID esté definido.
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          (async () => await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()))(), // Envuelto en IIFE para await en un contexto síncrono
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "..", "client", "src"), // Ajustado el path para que sea relativo a server/
      "@shared": path.resolve(import.meta.dirname, "..", "shared"), // Ajustado el path para que sea relativo a server/
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"), // Ajustado el path para que sea relativo a server/
    },
  },
  root: path.resolve(import.meta.dirname, "..", "client"), // Ajustado el path para que sea relativo a server/
  build: {
    outDir: path.resolve(import.meta.dirname, "..", "dist", "public"), // Ajustado el path para que sea relativo a server/
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
// FIN DE LA DEFINICIÓN DE LA CONFIGURACIÓN DE VITE

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    // Pasamos el objeto de configuración directamente
    // No necesitamos configFile: false si ya lo estamos pasando así
    ...viteConfig,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.join(process.cwd(), "public");

  log(`Attempting to serve static files from: ${distPath}`, "serveStatic");

  if (!fs.existsSync(distPath)) {
    log(`ERROR: Static directory not found at: ${distPath}`, "serveStatic");
    throw new Error(
      `Could not find the client build directory at: ${distPath}. Please check Vercel build output and 'includeFiles' in vercel.json.`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}