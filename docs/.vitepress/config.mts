import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "JSBusters",
    description: "Навчальний сайт",
    base: '/JSBusters/',
    head: [
      // Google Fonts
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' }],
      // FontAwesome
      ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' }],
      // ECMAScript fonts
      ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Bold-SlashedZero.woff2' }],
      ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-BoldItalic-SlashedZero.woff2' }],
      ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Regular-SlashedZero.woff2' }],
      ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Bold-SlashedZero.woff2' }],
      ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Regular-SlashedZero.woff2' }],
      // for cyrillic symbol https://fonts.google.com/specimen/IBM+Plex+Serif
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }], // crossorigin>
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }],

      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0X1WBFSVS3' }],
      ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0X1WBFSVS3');
      `],

      ['script', { async: '', src: 'https://cloud.umami.is/script.js', 'data-website-id': '76fa3cd1-28e2-4a21-ac21-c1c569ae0057' }],
    ],

    locales: {
      uk: {
        label: 'Українська',
        lang: 'uk',
        title: 'Навчальний сайт',
        description: 'Опис сайту',
        themeConfig: {
          nav: [
            { text: 'Головна', link: '/uk/' },
            { text: 'Про сайт', link: '/uk/about' },
          ],
          sidebar: [
            {
              text: 'Розділ 1',
              items: [
                { text: 'Тема 1', link: '/uk/topic-1' },
                { text: 'Тема 2', link: '/uk/topic-2' },
              ]
            }
          ]
        }
      },
      en: {
        label: 'English',
        lang: 'en',
        title: 'Edu Site',
        description: 'Site description',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'About', link: '/en/about' },
          ],
          sidebar: [
            {
              text: 'Section 1',
              items: [
                { text: 'Topic 1', link: '/en/topic-1' },
                { text: 'Topic 2', link: '/en/topic-2' },
              ]
            }
          ]
        }
      }
    },
    mermaid: {
      theme: 'default'
    },

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
      ],

      sidebar: [
        {
          text: 'Розділ 1',
          items: [
            { text: 'Тема 1', link: '/uk/section-1/topic-1' },
            { text: 'Тема 2', link: '/uk/section-1/topic-2' }
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/MC-Ltd/JSBusters' },

      ],
      
      search: { provider: 'local' },
    }
  })
)
