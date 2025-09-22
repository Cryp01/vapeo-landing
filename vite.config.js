import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["vapeo-landing.onrender.com", "https://vapeohookabar.com"],
  },
});
