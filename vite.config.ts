import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 3000,
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
