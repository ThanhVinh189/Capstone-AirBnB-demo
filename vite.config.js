import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Tách các thư viện bên ngoài thành chunk riêng
          }
          if (id.includes("LargeComponent")) {
            return "large-component"; // Tách component lớn thành chunk riêng
          }
        },
      },
    },
  },
});
