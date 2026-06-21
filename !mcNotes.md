# Переклади
- 20.1.2.3.1 ObjectDefineProperties
- 10.1.11 [[OwnPropertyKeys]]
- 20.1.2.11.1 GetOwnPropertyKeys
- 7.3.15 SetIntegrityLevel
- 7.3.16 TestIntegrityLevel 
- 7.3.23 EnumerableOwnProperties 
- 7.3.25 CopyDataProperties




# не дороблено
- перевірити шрифти, щоб оригінальні працювали першими, а підтримка кириличних вмикалася з гугл-шрифтів
- додати у .css форматування для:
  - таблиць специфікації
  - коду
- автоматична генерація списку файлів в index.md або/та у sidebar
  ## Підхід 1 — простий (рекомендую для старту)
  articles/index.md — просто вступна сторінка розділу, без списку статей. Навігація йде через sidebar.
```markdown
---
  title: Статті
---
# Статті

Короткий опис розділу. Обирайте статтю у меню зліва.
```

Sidebar — єдине місце де перелічені статті. Коли додаєте статтю — оновлюєте тільки config.ts.

  ## Підхід 2 — автоматичний список (без дублювання)
  Створіть файл docs/uk/articles/articles.data.ts:
```ts
import { createContentLoader } from 'vitepress'

export default createContentLoader('uk/articles/*.md', {
  transform(raw) {
    return raw
      .filter(p => !p.url.endsWith('/articles/'))
      .sort((a, b) => 
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
  }
})
```
  Тоді articles/index.md генерує список автоматично:
```markdown
---
title: Статті
---
<script setup>
import { data as articles } from './articles.data.ts'
</script>

# Статті

<div v-for="article in articles" :key="article.url">
  <a :href="article.url">{{ article.frontmatter.title }}</a>
  <span v-if="article.frontmatter.date"> — {{ article.frontmatter.date }}</span>
</div>
```
  У кожній статті додайте date у frontmatter:
```markdown
---
title: Назва статті
date: 2025-06-01
---
```
  Sidebar у цьому випадку також доведеться оновлювати вручну — або поставити плагін vitepress-plugin-sidebar для автогенерації.

  Висновок: для старту — Підхід 1. Коли статей стане багато — перейти на Підхід 2.



### де що шукати?
- Google Analytics, Umami Cloud
```
docs/.vitepress/config.mts
```

- директорії для окремих розділів специфікації
```
docs/en/ecma_clauses/
docs/uk/ecma_clauses/
```

- бібліотека спільних блоків з ECMAScript
```
docs/shared/blocks/
├── en
└── uk
```

- як пушити зміни
```bash
git add .
git commit -m "????????????"
git push origin main
```




# Джерела 
[JSBusters - Створення навчального сайту](https://claude.ai/chat/d7d8b7c3-f7f8-4546-9d34-c7692f009ec8){JSBusters}

[VitePress](https://vitepress.dev/){target="_self"}

[VitePress, Руководство](https://vitepress.dev/ru/guide/what-is-vitepress)

[ECMAScript 2025 specification reference](https://claude.ai/chat/2ac6e23a-a399-444b-a5b3-a5fab29c717e)

[Копіювання матеріалів ECMAScript з дотриманням авторських прав](https://claude.ai/chat/291cffcf-3e52-404c-8201-bfc27e48e9d2)



# JSBusters - Створення навчального сайту{JSBusters}

## Етап 1 — Підготовка середовища

##### Перевірити Node.js:
```bash
node -v   # має бути v22+
npm -v
```

##### Створити репозиторій на GitHub:
- New repository → назва (напр. my-edu-site)
- Public ✅
- Add README ✅

##### Клонувати локально:
```bash
cd C:\Projects   # або будь-яка інша папка

git clone https://github.com/<ваш-юзер>/my-edu-site.git
cd my-edu-site
```



## Етап 2 — Ініціалізація VitePress

```bash
cd my-edu-site
npm add -D vitepress
npx vitepress init
```

Wizard задасть питання — відповідайте так:
```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Edu Site
│
◇  Site description:
│  Навчальний сайт
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
Після цього запустіть локальний сервер:
```

```bash
npm run docs:dev
```
Сайт буде доступний на http://localhost:5173 — відкрийте у браузері і переконайтесь що працює.


## Етап 3 — Базова конфігурація
Відкрийте docs/.vitepress/config.ts і замініть вміст:
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Edu Site',

  head: [
    // Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' }],
    // FontAwesome
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' }],
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

  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/<ваш-юзер>/my-edu-site' }
    ]
  }
})
```

Потім створіть мінімальні сторінки щоб не було помилок:
```
docs/
├── uk/
│   ├── index.md
│   └── about.md
└── en/
    ├── index.md
    └── about.md
```

Вміст для кожного index.md:
```markdown
# Головна
Ласкаво просимо!
```
Збережіть — сервер перезавантажиться автоматично. Перевірте http://localhost:5173 — має з'явитись перемикач мов у навігації.


## Етап 4 — Підключення теми і CSS
Створіть структуру папки theme:
```
docs/.vitepress/theme/
├── index.ts
└── custom.css
```

theme/index.ts:
```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

theme/custom.css — скопіюйте сюди ваш існуючий CSS.

Можливі конфлікти з VitePress
VitePress використовує свої CSS-змінні. Якщо щось виглядає не так — обгорніть ваші стилі:
```css
/* Глобальні змінні VitePress — можна перевизначити */
:root {
  --vp-font-family-base: 'Inter', sans-serif;
  --vp-c-brand-1: #your-color;
}

/* Ваші існуючі класи — залишаються як є */
.info-card { ... }
.my-block  { ... }
```

Перевірка
Додайте тестовий блок у docs/uk/index.md:
```markdown
# Головна

<div class="info-card">
  <i class="fa fa-star"></i>
  Тестовий блок зі старого сайту
</div>
```
Відкрийте http://localhost:5173/uk/ — блок має виглядати як на старому сайті.



## Етап 5 — Підключення Mermaid
Встановіть плагін:
```bash
npm add -D vitepress-plugin-mermaid mermaid
```

Оновіть docs/.vitepress/config.ts:
```ts
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid' // ← додати

export default withMermaid(  // ← обгорнути
  defineConfig({
    // ... весь ваш існуючий конфіг без змін ...

    mermaid: {
      theme: 'default'
    }
  })
)
```

Перевірка — додайте у будь-який .md:
```markdown
\`\`\`mermaid
flowchart LR
    A[Початок] --> B[Крок 1]
    B --> C[Крок 2]
    C --> D[Кінець]
\`\`\`
```
Має відрендеритись діаграма у браузері.

Теми Mermaid
```ts
mermaid: {
  theme: 'default'   // або: neutral, dark, forest, base
}
```

Для автоматичного перемикання світла/темряви:
```ts
mermaid: {
  theme: 'neutral'  // добре виглядає в обох режимах
}
```


## Етап 6 — Структура контенту
Фінальна структура папки docs/:
```
docs/
├── uk/
│   ├── index.md
│   ├── about.md
│   └── section-1/
│       ├── topic-1.md
│       └── topic-2.md
├── en/
│   ├── index.md
│   ├── about.md
│   └── section-1/
│       ├── topic-1.md
│       └── topic-2.md
└── shared/
    └── blocks/
        ├── info-card.md      ← спільний HTML блок
        └── warning-block.md  ← ще один блок
```

Спільний блок docs/shared/blocks/info-card.md:
```html
<div class="info-card">
  <i class="fa fa-info-circle"></i>
  <p>Цей блок використовується на кількох сторінках</p>
</div>
```

Підключення блоку у будь-якій сторінці:
```markdown
## Тема уроку

Пояснювальний текст...

<!--@include: ../../shared/blocks/info-card.md-->

Продовження тексту...
```

Оновіть sidebar у config.ts під реальну структуру:
```ts
sidebar: [
  {
    text: 'Розділ 1',
    items: [
      { text: 'Тема 1', link: '/uk/section-1/topic-1' },
      { text: 'Тема 2', link: '/uk/section-1/topic-2' },
    ]
  }
]
```

Переходи між сторінками — VitePress додає їх автоматично (← Попередня / Наступна →) відповідно до порядку у sidebar. Додатково налаштувати можна так:
```markdown
---
prev:
  text: 'Тема 1'
  link: '/uk/section-1/topic-1'
next:
  text: 'Тема 3'
  link: '/uk/section-1/topic-3'
---
```


## Етап 7 — Аналітика
Google Analytics
Отримайте G-XXXXXXXXXX на analytics.google.com → Admin → Create Property.
Додайте у config.ts в секцію head[]:
```ts
head: [
  // ... існуючі шрифти ...
  ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
  ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `],
]
```

Umami
Варіант A — Umami Cloud (безкоштовно до 3 сайтів):
1. Реєстрація на umami.is
2. Add Website → отримайте скрипт

Варіант B — self-hosted на Railway/Vercel (безкоштовно).
Додайте у config.ts:
```ts
head: [
  ['script', {
    async: '',
    src: 'https://cloud.umami.is/script.js',
    'data-website-id': 'bbb-222-ваш-новий-id'
  }],
]
```

Перевірка
Обидві системи починають збирати дані одразу після деплою. Локально (localhost) дані зазвичай не трекаються — це нормально.


### Додавання сайту в Google Analytics
1. Увійдіть на analytics.google.com
2. Створіть нову Property:
```
Admin (шестерня) → Create → Property
```

- Property name: my-edu-site
- Timezone, Currency → Save

3. Налаштуйте Data Stream:
```
Data collection → Data streams → Add stream → Web
```

- Website URL: mc-ltd.github.io/my-edu-site
- Stream name: my-edu-site
- Create stream

4. Отримайте Measurement ID:
```
G-XXXXXXXXXX  ← скопіюйте
```
5. Додайте у config.ts:
```ts
head: [
  ['script', { 
    async: '', 
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' 
  }],
  ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `],
]
```
можливо використовувати адаптовану версію
```js
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
}
```

Кожна Property в Google Analytics — повністю окремий дашборд зі своїми звітами. Дані з'являться після деплою.

Додавати → Ресурс

- Обліковий запис — це верхній рівень (організація/компанія). Створюється один раз.
- Ресурс — це окремий сайт всередині облікового запису.

Структура:
```
Обліковий запис (mc-ltd)
├── Ресурс → old-site
└── Ресурс → my-edu-site  ← додаєте це
```
Тобто один обліковий запис — кілька ресурсів (сайтів), кожен з окремим G-XXXXXXXXXX.



## Етап 8 — GitHub Pages + CI/CD
1. Створіть файл .github/workflows/deploy.yml:
```yaml
name: Deploy VitePress to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run docs:build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

2. Увімкніть GitHub Pages у репозиторії:
```
github.com/MC-Ltd/JSBusters → Settings → Pages
Source → GitHub Actions
```

3. Запуште зміни:
```bash
git add .
git commit -m "init vitepress"
git push origin main
```

4. Перевірте деплой:
```
github.com/MC-Ltd/JSBusters → Actions
```
Має з'явитись workflow — після зеленої галочки сайт доступний на:
```
https://mc-ltd.github.io/JSBusters
```


## перед git push треба зупинити локальний сервер?
Зупиняти локальний сервер — не потрібно. git push і сервер працюють незалежно.



## ПРАВА
1. Футер кожної сторінки зі вмістом специфікації
Це мінімальний обов'язковий рядок:
```html
<footer>
  Специфікація ECMAScript® 2026 © Ecma International.
  Використовується відповідно до 
  <a href="https://tc39.es/ecma262/2026/multipage/copyright-and-software-license.html">
    Copyright License ECMA-262
  </a>.
  <a href="https://tc39.es/ecma262/2026/multipage/">Оригінал англійською</a>.
</footer>
```

Для перекладених сторінок додай:
```html
Це неофіційний переклад українською. 
У разі розбіжностей офіційна англійська версія має пріоритет.
```

2. Окрема сторінка /license (або /про-сайт)
Тут має бути повний текст copyright notice — той самий, що в розділі "Copyright & Software License" специфікації. Причина: ліцензія вимагає включити не просто рядок © Ecma International, а "copyright notice and this Copyright License and Disclaimer" — тобто повний блок тексту.
Найпростіше — просто навести посилання:
```html
<h2>Використання матеріалів ECMAScript</h2>
<p>
  Частина матеріалів цього сайту заснована на специфікації 
  ECMAScript® 2026 Language Specification (ECMA-262), 
  © Ecma International. Специфікація використовується як 
  анотований навчальний матеріал і частково перекладена 
  українською — що є дозволеним похідним твором згідно з 
  Ecma Copyright License.
</p>
<p>
  Повний текст ліцензії та disclaimer: 
  <a href="https://tc39.es/ecma262/2026/multipage/copyright-and-software-license.html">
    tc39.es/ecma262/2026/multipage/copyright-and-software-license.html
  </a>
</p>
<p>Оригінал специфікації: 
  <a href="https://tc39.es/ecma262/2026/multipage/">
    tc39.es/ecma262/2026/multipage/
  </a>
</p>
```

3. Код-зразки зі специфікації — BSD окремо
Якщо копіюєш блоки коду з самої специфікації (наприклад, приклади з emu-note), BSD вимагає зберегти copyright header у коді або поруч із ним. Простий варіант — підпис під блоком коду:
```html
<p class="code-source">
  Приклад зі специфікації ECMAScript® 2026 © Ecma International, BSD License.
</p>
```

Підсумок: де що
Місце
  Що розміщати
Футер кожної сторінки зі spec-вмістом
  © Ecma International + посилання на ліцензію + посилання на оригінал
Перекладені сторінки
  Те саме + "неофіційний переклад, оригінал має пріоритет"
Сторінка /license
  Повний опис + посилання на оригінальний copyright notice
Блоки коду зі специфікації
  Примітка про BSD + © Ecma International
