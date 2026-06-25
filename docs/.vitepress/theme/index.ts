import DefaultTheme from 'vitepress/theme'
// footer для сторінок з використанням специфікації
import EcmaFooter from './EcmaFooter.vue'
// додавання авто-посилання на англійський оригінал
import EnOriginalLink from './EnOriginalLink.vue'
import { h } from 'vue'
// import './custom.css'
// підключення адаптованого css-файлу специфікації
import './ecma-scoped.css'

// export default DefaultTheme
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // додавання авто-посилання на англійський оригінал
      'doc-before': () => h(EnOriginalLink),
      // footer для сторінок з використанням специфікації
      'doc-after': () => h(EcmaFooter)
    })
  }
}