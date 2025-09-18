import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jitrocky.github.io/chip-bracelet-site'
  base: '/chip-bracelet-site/',       // ✅ 关键：告诉 Astro 资源在子路径下
});
