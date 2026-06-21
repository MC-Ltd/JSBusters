<script setup>
import { useData, withBase } from 'vitepress'
const { page, lang, frontmatter } = useData()

const enPath = page.value.relativePath
  .replace(/^uk\//, 'en/')
  .replace(/\.md$/, '')
</script>

<template>
  <p v-if="lang === 'uk' && frontmatter.ecmaFooter" class="en-original-link">
    <a :href="withBase('/' + enPath)">🇬🇧 English original</a>
  </p>
</template>

<style scoped>
.en-original-link {
  font-size: 0.85rem;
  margin: 0 0 1rem;
}
.en-original-link a {
  color: var(--vp-c-text-2);
}
</style>