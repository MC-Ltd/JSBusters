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

::: info Оригінал
:::

::: details Оригінал англійською
:::

::: info Переклад
:::

::: tip
:::



```js
```

Після виконання цього коду ми побачимо у консолі наступне:

::: code-group

```js [Node.js 22.22.0 ]
```

```ts [Deno 2.7.12]
```

```ts [Bun 1.3.12]
```

```ts [Chrome 149.0.7827.54]
```

```ts [Opera 132.0.5905.102]
```

```ts [Firefox 152.0.3]
```
:::

пісочниці: [Node.js](), [Deno](), [Bun](), [DevTools](/uk/faq#DevTools), [console](/uk/faq#console)

#### en

::: info Оригінал
:::

::: details Оригінал англійською
:::

::: info Переклад
:::

::: tip
:::



```js
```

Після виконання цього коду ми побачимо у консолі наступне:

::: code-group

```js [Node.js 22.22.0 ]
```

```ts [Deno 2.7.12]
```

```ts [Bun 1.3.12]
```

```ts [Chrome 149.0.7827.54]
```

```ts [Opera 132.0.5905.102]
```

```ts [Firefox 152.0.3]
```
:::

sandboxes: [Node.js](), [Deno](), [Bun](), [DevTools](/uk/faq#DevTools), [console](/uk/faq#console)




```
```