import DefaultTheme from 'vitepress/theme'
import EcmaFooter from './EcmaFooter.vue'
import EnOriginalLink from './EnOriginalLink.vue' //Авто-посилання на англійський оригінал
import { h } from 'vue'
// import './custom.css'
import './ecma-scoped.css'

// export default DefaultTheme
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(EnOriginalLink),
      'doc-after': () => h(EcmaFooter)
    })
  }
}