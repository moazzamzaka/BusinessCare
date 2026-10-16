import { defineConfig } from 'astro/config';

// Static one-page marketing site, deployed to GitHub Pages.
//
// If you rename the repo, update `base` to "/<repo-name>".
// For a user/org site (repo named  <username>.github.io) set base to '/'.
export default defineConfig({
  site: 'https://moazzamzaka.github.io',
  base: '/BusinessCare',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
