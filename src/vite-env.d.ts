/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_MODE?: "maintenance" | "portfolio";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
