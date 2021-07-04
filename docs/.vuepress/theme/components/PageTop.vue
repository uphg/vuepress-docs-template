<template>
  <div class="re-page-top">
    <h2 class="title">
      <span>{{ $frontmatter.title ? $frontmatter.title : $page.title }}</span>
    </h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIndex: false,
      indexText: "目录",
      inTouch: false,
    };
  },
  computed: {
    showCatalog() {
      return this.$page.headers && this.$page.headers.length > 0 ? true : false;
    },
    indexState() {
      return this.$frontmatter.hideIndex
    }
  },
  mounted() {
    this.autoTouch();
  },
  methods: {
    clickIndex() {
      this.showIndex = !this.showIndex;
    },
    autoTouch() {
      this.inTouch = document.body.ontouchstart !== undefined ? true : false;
    },
  },
};
</script>
<style lang="stylus">
$paddingTop = 2.2rem
$paddingBottom = 0
.re-page-top {
  padding: $paddingTop 40px $paddingBottom;
  max-width: $contentWidth;
  margin: 0 auto -24px;
  h2.title {
    margin: 0;
    font-size 2.2rem
    padding-bottom 0
    border-bottom none 
}
}

@media (max-width: $MQNarrow) {
  .re-page-top {
    padding: $paddingTop 32px $paddingBottom;
  }
}

// wide mobile
@media (max-width: $MQMobile) {
  .re-page-top {
    padding: $paddingTop 24px $paddingBottom;
  }
}
</style>
