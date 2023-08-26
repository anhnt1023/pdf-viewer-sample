import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://anhnt1023.github.io/pdf-viewer-sample/",
  plugins: [react()],
});
