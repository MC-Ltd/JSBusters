import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { ecmaPageMap } from './ecma-page-map' // додавання посилань на внутрішні ресурси

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    // title: 'JSBusters',
    description: 'Site about JS-mythos',
    base: '/JSBusters/',
    appearance: 'dark',
    // appearance: 'force-dark' // Якщо хочете без можливості перемикання взагалі. Тоді тема завжди темна, перемикач зникає з навбару повністю.

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/JSBusters/public/favicon.svg' }],
      ['link', { rel: 'alternate icon', href: '/JSBusters/public/favicon.ico' }],

      // Google Fonts
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' }],
      // FontAwesome
      ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' }],
      // ECMAScript fonts
      // ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Bold-SlashedZero.woff2' }],
      // ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-BoldItalic-SlashedZero.woff2' }],
      // ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Regular-SlashedZero.woff2' }],
      // ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Bold-SlashedZero.woff2' }],
      // ['link', { rel: 'stylesheet', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Regular-SlashedZero.woff2' }],
      ['link', { rel: 'preload', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Bold-SlashedZero.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
      ['link', { rel: 'preload', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-BoldItalic-SlashedZero.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
      ['link', { rel: 'preload', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexMono-Regular-SlashedZero.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
      ['link', { rel: 'preload', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Bold-SlashedZero.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
      ['link', { rel: 'preload', href: 'https://tc39.es/ecma262/assets/fonts/IBMPlexSans-Regular-SlashedZero.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],

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
        // title: 'JSBusters',
        title: '',
        description: 'Сайт про JS-міфи',
        themeConfig: {
          nav: [
            {
              text: 'Статті',
              link: '/uk/articles/'
            },
            {
              text: 'ECMAScript 2026',
              link: '/uk/ecma2026/'
            },
            {
              text: 'Міфи та магія',
              link: '/uk/myths&magic/'
            },
            {
              text: 'Про сайт',
              link: '/uk/about'
            },
          ],
          sidebar: {
            '/uk/ecma2026/': [
              {
                text: 'ECMAScript 2026',
                items: [
                  {
                    text: '6 ECMAScript Data Types and Values',
                    items: [
                      {
                        text: '6.1 ECMAScript Language Types',
                        items: [
                          {
                            text: '6.1.7 The Object Type',
                            link: '/uk/ecma2026/06/06_01/clause_06_01_07_The_Object_Type.md',
                          },
                          // {
                          //   text: '6.1.7.1 Property Attributes',
                          //   link: '/uk/ecma2026/06/06_01/clause_06_01_07_01_Property_Attributes.md',
                          // },
                          // {
                          //   text: '6.1.7.2 Object Internal Methods and Internal Slots',
                          //   link: '/uk/ecma2026/06/06_01/clause_06_01_07_02_Object_Internal_Methods_and_Internal_Slots.md',
                          // },
                          // {
                          //   text: '6.1.7.3 Invariants of the Essential Internal Methods',
                          //   link: '/uk/ecma2026/06/06_01/clause_06_01_07_03_Invariants_of_the_Essential_Internal_Methods.md',
                          // },
                          // {
                          //   text: '6.1.7.4 Well-Known Intrinsic Objects',
                          //   link: '/uk/ecma2026/06/06_01/clause_06_01_07_04_Well-Known_Intrinsic_Objects.md',
                          // },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '7 Abstract Operations',
                    items: [
                      {
                        text: '7.3 Operations on Objects',
                        items: [
                          {
                            text: '7.3.15 SetIntegrityLevel ( obj, level )',
                            link: '/uk/ecma2026/07/07_03/clause_07_03_15_SetIntegrityLevel.md',
                          },
                          {
                            text: '7.3.16 TestIntegrityLevel ( obj, level )',
                            link: '/uk/ecma2026/07/07_03/clause_07_03_16_TestIntegrityLevel.md',
                          },
                          {
                            text: '7.3.23 EnumerableOwnProperties ( obj, kind )',
                            link: '/uk/ecma2026/07/07_03/clause_07_03_23_EnumerableOwnProperties.md',
                          },
                          {
                            text: '7.3.25 CopyDataProperties ( target, source, excludedItems )',
                            link: '/uk/ecma2026/07/07_03/clause_07_03_25_CopyDataProperties.md',
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '8 Syntax-Directed Operations',
                    items: [
                      {
                        text: '8.6 Miscellaneous',
                        items: [
                          {
                            text: '8.6.2 RS: BindingInitialization',
                            link: '/uk/ecma2026/08/08_06/clause_08_06_02_Runtime_Semantics_BindingInitialization.md',
                            // items: [
                            //   {
                            //     text: '8.6.2.1 InitializeBoundName ( name, value, envRecord )',
                            //     link: 'uk/ecma2026/08/08_06/-clause_08_06_02_01_InitializeBoundName.md',
                            //   },
                            // ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '10 Ordinary and Exotic Objects Behaviours',
                    items: [
                      {
                        text: '10.1 Ordinary Object Internal Methods and Internal Slots',
                        items: [
                          { 
                            text: '10.1.11 [[OwnPropertyKeys]] ( )',
                            link: '/uk/ecma2026/10/10_01/clause_10_01_11_OwnPropertyKeys.md',
                            items: [
                              {
                                text: '10.1.11.1 OrdinaryOwnPropertyKeys ( obj )',
                                link: '/uk/ecma2026/10/10_01/clause_10_01_11_01_OrdinaryOwnPropertyKeys.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '13 ECMAScript Language: Expressions',
                    items: [
                      {
                        text: '13.2 Primary Expression',
                        items: [
                          {
                            text: '13.2.5 Object Initializer',
                            items: [
                              {
                                text: '13.2.5.6 RS: PropertyDefinitionEvaluation',
                                link: '/uk/ecma2026/13/13_02/13_02_05/clause_13_02_05_06_Runtime_Semantics_PropertyDefinitionEvaluation.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '14 ECMAScript Language: Statements and Declarations',
                    items: [
                      {
                        text: '14.3 Declarations and the Variable Statement',
                        items: [
                          {
                            text: '14.3.3 Destructuring Binding Patterns',
                            items: [
                              {
                                text: '14.3.3.2 RS: RestBindingInitialization',
                                link: '/uk/ecma2026/14/14_03/14_03_03/clause_14_03_03_02_Runtime_Semantics_RestBindingInitialization.md',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        text: '14.7 Iteration Statements',
                        items: [
                          {
                            text: '14.7.5 The for-in, for-of, and for-await-of Statements',
                            items: [
                              {
                                text: '14.7.5.5 RS: ForInOfLoopEvaluation',
                                link: '/uk/ecma2026/14/14_07/14_07_05/clause_14_07_05_05_Runtime_Semantics_ForInOfLoopEvaluation.md',
                              },
                              {
                                text: '14.7.5.6 ForIn/OfHeadEvaluation ( uninitializedBoundNames, expr, iterationKind )',
                                link: '/uk/ecma2026/14/14_07/14_07_05/clause_14_07_05_06_ForInOfHeadEvaluation.md',
                              },
                              // {
                              //   text: '14.7.5.7 ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind, lhsKind, labelSet [ , iteratorKind ] )',
                              //   link: '/uk/ecma2026/14/14_07/14_07_05/-clause_14_07_05_07_ForInOfBodyEvaluation.md',
                              // },
                              {
                                text: '14.7.5.9 EnumerateObjectProperties ( obj )',
                                link: '/uk/ecma2026/14/14_07/14_07_05/clause_14_07_05_09_EnumerateObjectProperties.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '20 Fundamental Objects',
                    items: [
                      {
                        text: '20.1 Object Objects',
                        items: [
                          {
                            text: '20.1.2 Properties of the Object Constructor',
                            items: [
                              {
                                text: '20.1.2.1 Object.assign ( target, ...sources )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_01_Object_assign.md',
                              },
                              {
                                text: '20.1.2.2 Object.create ( proto, properties )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_02_Object_create.md',
                              },
                              {
                                text: '20.1.2.3 Object.defineProperties ( obj, properties )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_03_Object_defineProperties.md',
                                items: [
                                  {
                                    text: '20.1.2.3.1 ObjectDefineProperties ( obj, properties )',
                                    link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_03_01_ObjectDefineProperties.md',
                                  },
                                ],
                              },
                              {
                                text: '20.1.2.5 Object.entries ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_05_Object_entries.md',
                              },
                              {
                                text: '20.1.2.6 Object.freeze ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_06_Object_freeze.md',
                              },
                              {
                                text: '20.1.2.9 Object.getOwnPropertyDescriptors ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_09_Object_getOwnPropertyDescriptors.md',
                              },
                              {
                                text: '20.1.2.10 Object.getOwnPropertyNames ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_10_Object_getOwnPropertyNames.md',
                              },
                              {
                                text: '20.1.2.11 Object.getOwnPropertySymbols ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_Object_getOwnPropertySymbols.md',
                                items: [
                                  {
                                    text: '20.1.2.11.1 GetOwnPropertyKeys ( value, type )',
                                    link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_01_GetOwnPropertyKeys.md'
                                  },
                                ],
                              },
                              {
                                text: '20.1.2.17 Object.isFrozen ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_17_Object_isFrozen.md',
                              },
                              {
                                text: '20.1.2.18 Object.isSealed ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_18_Object_isSealed.md',
                              },
                              {
                                text: '20.1.2.19 Object.keys ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_19_Object_keys.md',
                              },
                              {
                                text: '20.1.2.22 Object.seal ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_22_Object_seal.md',
                              },
                              {
                                text: '20.1.2.24 Object.values ( obj )',
                                link: '/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_24_Object_values.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '25 Structured Data',
                    items: [
                      {
                        text: '25.5 The JSON Object',
                        items: [
                          {
                            text: '25.5.4 JSON.stringify ( value [ , replacer [ , space ] ] )',
                            link: '/uk/ecma2026/25/25_05/clause_25_05_04_JSON_stringify.md',
                            items: [
                              // {
                              //   text: '25.5.4.1 JSON Serialization Record',
                              //   link: '/uk/ecma2026/25/25_05/-clause_25_05_04_01_JSON_Serialization_Record.md',
                              // },
                              {
                                text: '25.5.4.2 SerializeJSONProperty ( state, key, holder )',
                                link: '/uk/ecma2026/25/25_05/clause_25_05_04_02_SerializeJSONProperty.md',
                              },
                              // {
                              //   text: '25.5.4.3 QuoteJSONString ( value )',
                              //   link: '/uk/ecma2026/25/25_05/-clause_25_05_04_03_QuoteJSONString.md',
                              // },
                              // {
                              //   text: '25.5.4.4 UnicodeEscape ( codeUnit )',
                              //   link: '/uk/ecma2026/25/25_05/-clause_25_05_04_04_UnicodeEscape.md',
                              // },
                              {
                                text: '25.5.4.5 SerializeJSONObject ( state, value )',
                                link: '/uk/ecma2026/25/25_05/clause_25_05_04_05_SerializeJSONObject.md',
                              },
                              // {
                              //   text: '25.5.4.6 SerializeJSONArray ( state, value )',
                              //   link: '/uk/ecma2026/25/25_05/-clause_25_05_04_06_SerializeJSONArray.md',
                              // },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '28 Reflection',
                    items: [
                      {
                        text: '28.1 The Reflect Object',
                        items: [
                          {
                            text: '28.1.10 Reflect.ownKeys ( target )',
                            link: '/uk/ecma2026/28/28_01/clause_28_01_10_Reflect_ownKeys.md',
                          },
                        ],
                      },
                    ],
                  },
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
        // title: 'JSBusters',
        title: '',
        description: 'Site about JS-mythos',
        themeConfig: {
          nav: [
            {
              text: 'Articles',
              link: '/en/articles/'
            },
            {
              text: 'ECMAScript 2026',
              link: '/en/ecma2026/'
            },
            {
              text: 'Myths & magic',
              link: '/en/myths&magic/'
            },
            {
              text: 'About',
              link: '/en/about'
            },
          ],
          sidebar: {
            '/en/ecma2026/': [
              // {
              //   text: 'ECMAScript 2026',
              //   items: [
              //     { text: 'List clauses', link: '/en/ecma2026/' },
              //     { text: '[[OwnPropertyKeys]]()', link: '/en/ecma2026/clause_OwnPropertyKeys' },
              //     { text: 'OrdinaryOwnPropertyKeys', link: '/en/ecma2026/clause_OrdinaryOwnPropertyKeys' },
              //     { text: 'Object.keys()', link: '/en/ecma2026/clause_Object_keys' },
              //     { text: 'Object.values()', link: '/en/ecma2026/clause_Object_values' },
              //     { text: 'Object.entries()', link: '/en/ecma2026/clause_Object_entries' },

              //     { text: 'Object.assign()', link: '/en/ecma2026/clause_Object_assign' },
              //     { text: 'Object.create()', link: '/en/ecma2026/clause_Object_create' },

              //     { text: 'Reflect.ownKeys()', link: '/en/ecma2026/clause_Reflect_ownKeys' },
              //   ]
              // }
              {
                text: 'ECMAScript 2026',
                items: [
                  {
                    text: '6 ECMAScript Data Types and Values',
                    items: [
                      {
                        text: '6.1 ECMAScript Language Types',
                        items: [
                          {
                            text: '6.1.7 The Object Type',
                            link: '/en/ecma2026/06/06_01/clause_06_01_07_The_Object_Type.md',
                          },
                          // {
                          //   text: '6.1.7.1 Property Attributes',
                          //   link: '/en/ecma2026/06/06_01/clause_06_01_07_01_Property_Attributes.md',
                          // },
                          // {
                          //   text: '6.1.7.2 Object Internal Methods and Internal Slots',
                          //   link: '/en/ecma2026/06/06_01/clause_06_01_07_02_Object_Internal_Methods_and_Internal_Slots.md',
                          // },
                          // {
                          //   text: '6.1.7.3 Invariants of the Essential Internal Methods',
                          //   link: '/en/ecma2026/06/06_01/clause_06_01_07_03_Invariants_of_the_Essential_Internal_Methods.md',
                          // },
                          // {
                          //   text: '6.1.7.4 Well-Known Intrinsic Objects',
                          //   link: '/en/ecma2026/06/06_01/clause_06_01_07_04_Well-Known_Intrinsic_Objects.md',
                          // },
                        ],
                      },
                    ],
                  },

                  {
                    text: '7 Abstract Operations',
                    items: [
                      {
                        text: '7.3 Operations on Objects',
                        items: [
                          {
                            text: '7.3.15 SetIntegrityLevel ( obj, level )',
                            link: '/en/ecma2026/07/07_03/clause_07_03_15_SetIntegrityLevel.md',
                          },
                          {
                            text: '7.3.16 TestIntegrityLevel ( obj, level )',
                            link: '/en/ecma2026/07/07_03/clause_07_03_16_TestIntegrityLevel.md',
                          },
                          {
                            text: '7.3.23 EnumerableOwnProperties ( obj, kind )',
                            link: '/en/ecma2026/07/07_03/clause_07_03_23_EnumerableOwnProperties.md',
                          },
                          {
                            text: '7.3.25 CopyDataProperties ( target, source, excludedItems )',
                            link: '/en/ecma2026/07/07_03/clause_07_03_25_CopyDataProperties.md',
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '8 Syntax-Directed Operations',
                    items: [
                      {
                        text: '8.6 Miscellaneous',
                        items: [
                          {
                            text: '8.6.2 RS: BindingInitialization',
                            link: '/en/ecma2026/08/08_06/clause_08_06_02_Runtime_Semantics_BindingInitialization.md',
                            // items: [
                            //   {
                            //     text: '8.6.2.1 InitializeBoundName ( name, value, envRecord )',
                            //     link: 'en/ecma2026/08/08_06/-clause_08_06_02_01_InitializeBoundName.md'
                            //   },
                            // ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '10 Ordinary and Exotic Objects Behaviours',
                    items: [
                      {
                        text: '10.1 Ordinary Object Internal Methods and Internal Slots',
                        items: [
                          { 
                            text: '10.1.11 [[OwnPropertyKeys]] ( )',
                            link: '/en/ecma2026/10/10_01/clause_10_01_11_OwnPropertyKeys.md',
                            items: [
                              {
                                text: '10.1.11.1 OrdinaryOwnPropertyKeys ( obj )',
                                link: '/en/ecma2026/10/10_01/clause_10_01_11_01_OrdinaryOwnPropertyKeys.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '13 ECMAScript Language: Expressions',
                    items: [
                      {
                        text: '13.2 Primary Expression',
                        items: [
                          {
                            text: '13.2.5 Object Initializer',
                            items: [
                              {
                                text: '13.2.5.6 RS: PropertyDefinitionEvaluation',
                                link: '/en/ecma2026/13/13_02/13_02_05/clause_13_02_05_06_Runtime_Semantics_PropertyDefinitionEvaluation.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '14 ECMAScript Language: Statements and Declarations',
                    items: [
                      {
                        text: '14.3 Declarations and the Variable Statement',
                        items: [
                          {
                            text: '14.3.3 Destructuring Binding Patterns',
                            items: [
                              {
                                text: '14.3.3.2 RS: RestBindingInitialization',
                                link: '/en/ecma2026/14/14_03/14_03_03/clause_14_03_03_02_Runtime_Semantics_RestBindingInitialization.md',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        text: '14.7 Iteration Statements',
                        items: [
                          {
                            text: '14.7.5 The for-in, for-of, and for-await-of Statements',
                            items: [
                              {
                                text: '14.7.5.5 RS: ForInOfLoopEvaluation',
                                link: '/en/ecma2026/14/14_07/14_07_05/clause_14_07_05_05_Runtime_Semantics_ForInOfLoopEvaluation.md',
                              },
                              {
                                text: '14.7.5.6 ForIn/OfHeadEvaluation ( uninitializedBoundNames, expr, iterationKind )',
                                link: '/en/ecma2026/14/14_07/14_07_05/clause_14_07_05_06_ForInOfHeadEvaluation.md',
                              },
                              // {
                              //   text: '14.7.5.7 ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind, lhsKind, labelSet [ , iteratorKind ] )',
                              //   link: '/en/ecma2026/14/14_07/14_07_05/-clause_14_07_05_07_ForInOfBodyEvaluation.md',
                              // },
                              {
                                text: '14.7.5.9 EnumerateObjectProperties ( obj )',
                                link: '/en/ecma2026/14/14_07/14_07_05/clause_14_07_05_09_EnumerateObjectProperties.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '20 Fundamental Objects',
                    items: [
                      {
                        text: '20.1 Object Objects',
                        items: [
                          {
                            text: '20.1.2 Properties of the Object Constructor',
                            items: [
                              {
                                text: '20.1.2.1 Object.assign ( target, ...sources )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_01_Object_assign.md',
                              },
                              {
                                text: '20.1.2.2 Object.create ( proto, properties )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_02_Object_create.md',
                              },
                              {
                                text: '20.1.2.3 Object.defineProperties ( obj, properties )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_03_Object_defineProperties.md',
                                items: [
                                  {
                                    text: '20.1.2.3.1 ObjectDefineProperties ( obj, properties )',
                                    link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_03_01_ObjectDefineProperties.md',
                                  },
                                ],
                              },
                              {
                                text: '20.1.2.5 Object.entries ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_05_Object_entries.md',
                              },
                              {
                                text: '20.1.2.6 Object.freeze ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_06_Object_freeze.md',
                              },
                              {
                                text: '20.1.2.9 Object.getOwnPropertyDescriptors ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_09_Object_getOwnPropertyDescriptors.md',
                              },
                              {
                                text: '20.1.2.10 Object.getOwnPropertyNames ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_10_Object_getOwnPropertyNames.md',
                              },
                              {
                                text: '20.1.2.11 Object.getOwnPropertySymbols ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_Object_getOwnPropertySymbols.md',
                                items: [
                                  {
                                    text: '20.1.2.11.1 GetOwnPropertyKeys ( value, type )',
                                    link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_01_GetOwnPropertyKeys.md'
                                  },
                                ],
                              },
                              {
                                text: '20.1.2.17 Object.isFrozen ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_17_Object_isFrozen.md',
                              },
                              {
                                text: '20.1.2.18 Object.isSealed ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_18_Object_isSealed.md',
                              },
                              {
                                text: '20.1.2.19 Object.keys ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_19_Object_keys.md',
                              },
                              {
                                text: '20.1.2.22 Object.seal ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_22_Object_seal.md',
                              },
                              {
                                text: '20.1.2.24 Object.values ( obj )',
                                link: '/en/ecma2026/20/20_01/20_01_02/clause_20_01_02_24_Object_values.md',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '25 Structured Data',
                    items: [
                      {
                        text: '25.5 The JSON Object',
                        items: [
                          {
                            text: '25.5.4 JSON.stringify ( value [ , replacer [ , space ] ] )',
                            link: '/en/ecma2026/25/25_05/clause_25_05_04_JSON_stringify.md',
                            items: [
                              // {
                              //   text: '25.5.4.1 JSON Serialization Record',
                              //   link: '/en/ecma2026/25/25_05/-clause_25_05_04_01_JSON_Serialization_Record.md',
                              // },
                              {
                                text: '25.5.4.2 SerializeJSONProperty ( state, key, holder )',
                                link: '/en/ecma2026/25/25_05/clause_25_05_04_02_SerializeJSONProperty.md',
                              },
                              // {
                              //   text: '25.5.4.3 QuoteJSONString ( value )',
                              //   link: '/en/ecma2026/25/25_05/-clause_25_05_04_03_QuoteJSONString.md',
                              // },
                              // {
                              //   text: '25.5.4.4 UnicodeEscape ( codeUnit )',
                              //   link: '/en/ecma2026/25/25_05/-clause_25_05_04_04_UnicodeEscape.md',
                              // },
                              {
                                text: '25.5.4.5 SerializeJSONObject ( state, value )',
                                link: '/en/ecma2026/25/25_05/clause_25_05_04_05_SerializeJSONObject.md',
                              },
                              // {
                              //   text: '25.5.4.6 SerializeJSONArray ( state, value )',
                              //   link: '/en/ecma2026/25/25_05/-clause_25_05_04_06_SerializeJSONArray.md',
                              // },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  
                  {
                    text: '28 Reflection',
                    items: [
                      {
                        text: '28.1 The Reflect Object',
                        items: [
                          {
                            text: '28.1.10 Reflect.ownKeys ( target )',
                            link: '/en/ecma2026/28/28_01/clause_28_01_10_Reflect_ownKeys.md',
                          },
                        ],
                      },
                    ],
                  },
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
      logo: '/logo.png',

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
    },

    // додаємо до посилань специфікації єдину точку входу
    // transformHtml(code) {
    //   const SPEC_BASE = 'https://tc39.es/ecma262/2026/multipage/'
    //   return code.replace(
    //     /<div id="spec-container">[\s\S]*?<\/div>/g,
    //     (block) =>
    //       block.replace(
    //         /href="(?!https?:\/\/)([^"]+\.html#[^"]*)"/g,
    //         `href="${SPEC_BASE}$1"`
    //       )
    //   )
    // },
    markdown: {
      // автоматичне додавання точки входу до посилань на сайт специфікації
      // config(md) {
      //   const SPEC_BASE = 'https://tc39.es/ecma262/2026/multipage/'
      //   md.core.ruler.push('ecma-href-rewrite', (state) => {
      //     for (const token of state.tokens) {
      //       if (token.type === 'html_block' || token.type === 'html_inline') {
      //         token.content = token.content.replace(
      //           /href="(?!https?:\/\/)([^"]+\.html#[^"]*)"/g,
      //           `href="${SPEC_BASE}$1"`
      //         )
      //       }
      //     }
      //     return true
      //   })
      // }
      // автоматичне додавання точки входу до посилань на сайт специфікації
      // і додавання посилань на внутрішні ресурси
      config(md) {
        const SPEC_BASE = 'https://tc39.es/ecma262/2026/multipage/'

        md.core.ruler.push('ecma-href-rewrite', (state) => {
          const lang = state.env?.relativePath?.startsWith('uk/') ? 'uk' : 'en'

          for (const token of state.tokens) {
            if (token.type === 'html_block' || token.type === 'html_inline') {
              // існуюча заміна на повний URL специфікації

              // token.content = token.content.replace(
              //   /href="(?!https?:\/\/)([^"]+\.html#([^"]*))"([^>]*>)/g,
              //   (match, fullPath, anchor, rest) => {
              //     const specHref = `href="${SPEC_BASE}${fullPath}"`
              //     const siteEntry = ecmaPageMap[anchor]
              //     if (siteEntry) {
              //       const siteHref = `/JSBusters${siteEntry[lang]}`
              //       return `${specHref}${rest}<a href="${siteHref}" class="site-link" title="На сайті">📖</a>`
              //     }
              //     return `${specHref}${rest}`
              //   }
              // )
              token.content = token.content.replace(
                /<a ([^>]*)href="(?!https?:\/\/)([^"]+\.html#([^"]*?))"([^>]*)>([\s\S]*?)<\/a>/g,
                (match, before, fullPath, anchor, after, text) => {
                  const specTag = `<a ${before}href="${SPEC_BASE}${fullPath}"${after}>${text}</a>`
                  const siteEntry = ecmaPageMap[anchor]
                  if (siteEntry) {
                    const siteHref = `/JSBusters${siteEntry[lang]}`
                    return `${specTag}<a href="${siteHref}" class="site-link" title="На сайті">📖</a>`
                  }
                  return specTag
                }
              )
            }
          }
          return true
        })

      },
    },
  })
)
