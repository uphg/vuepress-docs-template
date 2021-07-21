<template>
  <main class="page">
    <slot name="top" />
    <PageTop />
    <PageIndex />
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageTop from '@theme/components/PageTop.vue'
import PageIndex from '@theme/components/toc/PageIndex.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageTop, PageIndex, PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
