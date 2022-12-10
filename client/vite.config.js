import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  //   proxy: {
  //     "/api": {
  //       target: "http://api.cup2022.ir",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, "http://api.cup2022.ir/api"),
  //     },
  //     cors: false,
  //   },
  // },
  plugins: [react()],
  base: "/",
});
