# Локалізація

### файл /docs/.vitepress/config.mts

locales -> uk -> themeConfig -> 
  sidebarMenuLabel
  docFooter
  footer

locales -> en -> themeConfig -> 



# footers

### загальний footer:
locales -> uk -> themeConfig -> footer
locales -> en -> themeConfig -> footer

### ecma-footer для сторінок з використанням специфікації:
1. скрипт /docs/.vitepress/theme/EcmaFooter.vue
2. підключення скрипту /docs/.vitepress/theme/index.ts 
3. на сторінці у секцію "метадані YAML" треба додати ```ecmaFooter: true```



# додавання на локалізовані сторінки авто-посилання на англійський оригінал сторінки на сайті

1. скрипт /docs/.vitepress/theme/EnOriginalLink.vue
2. підключення скрипту /docs/.vitepress/theme/index.ts 



# Верстка сторінок

### сторінки з розділами специфікації:
```
---
# layout: page
ecmaFooter: true
title: ''
date: 2025-06-18
---
```

### оформлення коду:

#### uk

```javascript
...
```

пісочниці: [NodeJS](), [Deno](), [Bun](), [DevTools](/uk/faq.md#DevTools)

#### en

```javascript
...
```

sandboxes: [NodeJS](), [Deno](), [Bun](), [DevTools](/en/faq.md#DevTools)




```
```