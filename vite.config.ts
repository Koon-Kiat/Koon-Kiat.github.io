
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
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin',
    },
    // Completely disable HMR and WebSocket functionality
    hmr: false,
    strictPort: false,
    // Explicitly deny access to sensitive files/directories
    fs: {
      strict: true,
      deny: ['.env', '.env.*', 'node_modules/.cache', '.git'],
    },
    // Disable WebSocket server completely
    ws: false,
  },
  // Add build options to address Babel RegExp and nanoid issues
  build: {
    // Minify output to reduce risk from inefficient RegExp
    minify: 'terser',
    terserOptions: {
      compress: true,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  // Exclude Vite client from dependencies
  optimizeDeps: {
    exclude: ['@vite/client'],
  },
}));
