
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add CORS protection to prevent arbitrary requests to dev server
    cors: {
      origin: true,
      credentials: true,
    },
    // Add security headers to prevent unauthorized access
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin",
    },
    // Completely disable HMR and WebSocket functionality
    hmr: false,
    strictPort: false,
    // Explicitly deny access to sensitive files/directories
    fs: {
      strict: true,
      deny: [".env", ".env.*", "node_modules/.cache", ".git"],
    },
    // Disable WebSocket server completely
    ws: false,
    // Add the blocked host to allowed hosts
    allowedHosts: ["cbfb6f8c-9830-4ce1-89bc-52c184ae238a.lovableproject.com"],
  },
  // Add build options to address Babel RegExp and nanoid issues
  build: {
    // Minify output to reduce risk from inefficient RegExp
    minify: "terser",
    terserOptions: {
      compress: true,
    },
    // Ensure client scripts aren't included
    rollupOptions: {
      external: ["@vite/client", "node_modules/vite/dist/client/env.mjs"],
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  define: {
    // Define environment variables
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
    "__WS_TOKEN__": JSON.stringify("disabled"),
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
  // For GitHub Pages deployment
  outDir: "dist",
  optimizeDeps: {
    exclude: ["@vite/client"],
  },
  // Disable loading of env files
  envFile: false,
}));
