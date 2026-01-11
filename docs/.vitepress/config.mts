import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lavamusic/',
  title: "LavaMusic",
  description: "A professional music bot documentation site.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/installation' },
      { text: 'Commands', link: '/commands' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Docker Setup', link: '/docker' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Commands List', link: '/commands' },
          { text: 'Translation', link: '/translation' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/appujet/lavamusic' }
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024-present appujet'
    },

    search: {
      provider: 'local'
    }
  }
})
