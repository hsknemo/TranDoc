import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tran",
  description: "Transform for User",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/what-is-tran' }
    ],

    sidebar: [
      {
        collapsed: true,
        text: '指南',
        items: [
          { text: '什么是Tran', link: '/guide/what-is-tran' },
          { text: '快速开始', link: '/guide/how-to-use' }
        ]
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hsknemo' }
    ]
  }
})
