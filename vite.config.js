import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      external: ["antd"], // Add 'antd' to the external dependencies
    },
  },
  preview: {
    assetsDir: "assets",
    rollupOptions: {
      external: ["antd"], // Add 'antd' to the external dependencies
    },
  },
});
