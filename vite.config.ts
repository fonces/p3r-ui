import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-expect-error: 型定義がまだ提供されていません
import { tanstackRouterVitePlugin } from "@tanstack/router-vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tanstackRouterVitePlugin({ target: 'react', autoCodeSplitting: true })],
  base: "/p3r-ui",
});
