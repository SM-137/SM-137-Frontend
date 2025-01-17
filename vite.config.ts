import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/SM-137-Frontend/",
  server: {
    proxy: {
      "/api": {
        target:
          "http://ec2-54-180-106-175.ap-northeast-2.compute.amazonaws.com:8080/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
