import path from "path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { visualizer } from "rollup-plugin-visualizer";

const isTest = process.env.NODE_ENV === "test";

export default defineConfig({
  plugins: [
    viteReact(),
    !isTest && TanStackRouterVite({ routesDirectory: "src/routes" }),
    visualizer({
      open: false,
      gzipSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
        manualChunks: {
          // example:
          // threejs: ["three", "react-three/fiber", ...],
        },
      },
    },
  },
});
