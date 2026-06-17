import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'JSBusters',
    description: 'Site about JS-mythos',
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
      // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }], // crossorigin>
      // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }],

      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0X1WBFSVS3' }],
      ['script', {}, /*`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0X1WBFSVS3');
      `*/
        `
          if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-0X1WBFSVS3');
          }
        `
      ],

      [
        'script',
        {
          async: '',
          src: 'https://cloud.umami.is/script.js',
          'data-website-id': '76fa3cd1-28e2-4a21-ac21-c1c569ae0057',
          'data-domains': 'mc-ltd.github.io'
       }
      ],
    ],

    // vue: {
    //   template: {
    //     compilerOptions: {
    //       isCustomElement: (tag) => tag.startsWith('emu-')
    //     }
    //   }
    // },

    /* Якщо потрібна темна/світла тема для коду в VitePress
    markdown: {
      theme: {
        light: 'solarized-light',
        dark: 'github-dark'
      }
    }
    */

    locales: {
      uk: {
        label: 'Українська',
        lang: 'uk',
        title: 'JSBusters',
        description: 'Сайт про JS-міфи',
        themeConfig: {
          nav: [
            { text: 'Статті', link: '/uk/articles/' },
            { text: 'ECMAScript 2026', link: '/uk/ecma2026/' },
            { text: 'Міфи', link: '/uk/mythos/' },
            { text: 'Про сайт', link: '/uk/about' },
          ],
          sidebar: {
            '/uk/ecma2026/': [
              {
                text: 'ECMAScript 2026',
                items: [
                  { text: 'List clauses', link: '/uk/ecma2026/' },
                  { text: '[[OwnPropertyKeys]]()', link: '/uk/ecma2026/clause_OwnPropertyKeys' },
                  { text: 'OrdinaryOwnPropertyKeys', link: '/uk/ecma2026/clause_OrdinaryOwnPropertyKeys' },
                  { text: 'Object.keys()', link: '/uk/ecma2026/clause_Object_keys' },
                  { text: 'Object.values()', link: '/uk/ecma2026/clause_Object_values' },
                  { text: 'Object.entries()', link: '/uk/ecma2026/clause_Object_entries' },

                  { text: 'Object.assign()', link: '/uk/ecma2026/clause_Object_assign' },
                  { text: 'Object.create()', link: '/uk/ecma2026/clause_Object_create' },
                ]
              }
            ],
            '/uk/articles/': [
              {
                text: 'Articles',
                items: [
                  { text: 'List articles', link: '/uk/articles/' },
                  { text: 'Article 1', link: '/uk/articles/article_001' },
                ]
              }
            ],
            '/uk/mythos/': [
              {
                text: 'Mythos',
                items: [
                  { text: 'General questions', link: '/uk/mythos/' },
                  { text: 'Technical issues', link: '/uk/mythos/technical' },
                ]
              }
            ],
          }
        }
      },
      en: {
        label: 'English',
        lang: 'en',
        title: 'JSBusters',
        description: 'Site about JS-mythos',
        themeConfig: {
          nav: [
            { text: 'Articles', link: '/en/articles/' },
            { text: 'ECMAScript 2026', link: '/en/ecma2026/' },
            { text: 'Mythos', link: '/en/mythos/' },
            { text: 'About', link: '/en/about' },
          ],
          // sidebar: [
          //   {
          //     text: 'Section 1',
          //     items: [
          //       { text: 'Topic 1', link: '/en/topic-1' },
          //       { text: 'Topic 2', link: '/en/topic-2' },
          //     ]
          //   }
          // ]
          sidebar: {
            '/en/ecma2026/': [
              {
                text: 'ECMAScript 2026',
                items: [
                  { text: 'List clauses', link: '/en/ecma2026/' },
                  { text: '[[OwnPropertyKeys]]()', link: '/en/ecma2026/clause_OwnPropertyKeys' },
                  { text: 'OrdinaryOwnPropertyKeys', link: '/en/ecma2026/clause_OrdinaryOwnPropertyKeys' },
                  { text: 'Object.keys()', link: '/en/ecma2026/clause_Object_keys' },
                  { text: 'Object.values()', link: '/en/ecma2026/clause_Object_values' },
                  { text: 'Object.entries()', link: '/en/ecma2026/clause_Object_entries' },

                  { text: 'Object.assign()', link: '/en/ecma2026/clause_Object_assign' },
                  { text: 'Object.create()', link: '/en/ecma2026/clause_Object_create' },
                ]
              }
            ],
            '/en/articles/': [
              {
                text: 'Articles',
                items: [
                  { text: 'List articles', link: '/en/articles/' },
                  { text: 'Article 1', link: '/en/articles/article_001' },
                ]
              }
            ],
            '/en/mythos/': [
              {
                text: 'Mythos',
                items: [
                  { text: 'General questions', link: '/en/mythos/' },
                  { text: 'Technical issues', link: '/en/mythos/technical' },
                ]
              }
            ],
            // те саме для /en/
          }
        }
      }
    },
    mermaid: {
      theme: 'default'
    },

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      siteTitle: 'JSBusters',
      logo: '/my-logo.svg',



      // nav: [
      //   { text: 'Home', link: '/' },
      //   { text: 'Examples', link: '/markdown-examples' }
      // ],

      // sidebar: [
      //   {
      //     text: 'Розділ 1',
      //     items: [
      //       { text: 'Тема 1', link: '/uk/section-1/topic-1' },
      //       { text: 'Тема 2', link: '/uk/section-1/topic-2' }
      //     ]
      //   },
      //   {
      //     text: 'ECMA Clauses',
      //     items: [
      //       { text: 'Object.assign', link: '/en/ecma_clauses/clause_Object_assign' },
      //       { text: 'Object.create', link: '/en/ecma_clauses/clause_Object_create' },
      //     ]
      //   }
      // ],

      // socialLinks: [
      //   { icon: 'github', link: 'https://github.com/MC-Ltd/JSBusters' },
      // ],
      
      search: { provider: 'local' },
    }
  })
)
