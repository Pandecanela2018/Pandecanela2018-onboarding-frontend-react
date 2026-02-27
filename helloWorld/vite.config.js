import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep Vite on the standard React plugin; React Compiler requires a different stack.
export default defineConfig({
  plugins: [react()],
});
