<template>
  <t-scrollbar wrap-class="scrollbar-wrapper">
    <div
      class="theme-container"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
      />

      <div
        class="sidebar-mask"
        @click="toggleSidebar(false)"
      />

      <Sidebar
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
      >
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <Home v-if="$page.frontmatter.home" />

      <Page
        v-else
        :sidebar-items="sidebarItems"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </div>
  </t-scrollbar>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import activeHeaderLinks from '../mixins/active-header-links'
import mediumZoom from '../mixins/medium-zoom/index'

export default {
  name: 'Layout',

  mixins: [activeHeaderLinks, mediumZoom],

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  watch: {
    '$route'() {
      this.scrollTo(location.hash)
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },

    scrollbar() {
      return this.$el.querySelector('#app > .tulp-scrollbar > .tulp-scrollbar__wrap')
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    this.initScrollTo()
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    initScrollTo() {
      this.closeBehavior()
      this.scrollTo(location.hash)
      this.$nextTick(this.openBehavior)
    },

    // 修复页面不会自动跳转锚点的 bug
    scrollTo(selector) {
      if (!selector || selector === '#') {
        this.closeBehavior()
        this.scrollbar.scrollTo(0, 0)
        this.$nextTick(this.openBehavior)
        return
      }
      const el = document.querySelector(decodeURIComponent(selector))
      if (el && el.offsetTop) {
        this.scrollbar.scrollTo(0, el.offsetTop)
      }
    },

    closeBehavior() {
      this.scrollbar.style.scrollBehavior = 'auto'
    },

    openBehavior() {
      this.scrollbar.style.scrollBehavior = 'smooth'
    }
  }
}
</script>
