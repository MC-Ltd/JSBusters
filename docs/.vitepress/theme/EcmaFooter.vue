<script setup>
import { useData } from 'vitepress'
const { frontmatter, lang } = useData()
</script>

<template>
  <footer v-if="frontmatter.ecmaFooter" class="ecma-footer">

    <template v-if="lang === 'uk'">
      Специфікація ECMAScript® 2026 © Ecma International.
      Використовується відповідно до
      <a href="https://tc39.es/ecma262/2026/multipage/copyright-and-software-license.html"
         target="_blank">Copyright License ECMA-262</a>.
      <a href="https://tc39.es/ecma262/2026/multipage/"
         target="_blank">Оригінал англійською</a>.
    </template>

    <template v-else>
      ECMAScript® 2026 Specification © Ecma International.
      Used under
      <a href="https://tc39.es/ecma262/2026/multipage/copyright-and-software-license.html"
         target="_blank">Copyright License ECMA-262</a>.
      <a href="https://tc39.es/ecma262/2026/multipage/"
         target="_blank">Original specification</a>.
    </template>

  </footer>
</template>

<style scoped>
.ecma-footer {
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.ecma-footer a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
</style>