// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = /** @type {any} */ (globalThis).process?.env
  ?.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? 'https://tunhuyhd.github.io'
    : 'https://30y96q.einslight.com',
  base: isGitHubPages ? '/PageForMeeting' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
