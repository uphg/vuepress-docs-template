<template>
  <div class="page-index" :class="{'hide-index': indexState}" v-if="showCatalog || inTouch">
    <div class="page-index-title" @click="clickIndex()">
      <span class="open-catalog" :class="{ active: showIndex }">
        <arrow-right
          class="page-index-icon arrow-right"
          :class="{ 'is-down': showIndex }"
        />
        <span class="text">{{ indexText }}</span>
      </span>
    </div>
    <div class="page-index-content" v-if="showCatalog">
      <transition name="fade">
        <div v-show="showIndex" class="page-catalog">
          <TOC />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import ArrowRight from '../icon/ArrowRight.vue' 
import TOC from './components/TableOfContents'
export default {
  components: { ArrowRight, TOC },
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
$marginTop = 2rem
$pageArrowSize = 10px
.page-index {
  max-width: 740px;
  margin: $marginTop auto -1rem;
  position: relative;
  z-index: 1;
  background-color #f3f5f7
  &.hide-index {
    display: none;
  }
}
.page-index-title {
  color: #363636;
  padding: calc(1.6em - 3px) 1.6em;
  cursor: pointer;
  &:hover {
    .open-catalog {
      color: $accentColor;
    }
  }
}

/* 组件显示/隐藏过渡 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.16s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.page-catalog {
  color: #6a737d;
  padding: 0 1.6em calc(1.6em - 3px);

  .synopsis-ul {
    margin: 0;
    line-height: 2;
  }

  .synopsis-link {
    color: $defaultLinkColor;
    transition: color 0.2s;
    border-bottom: 1px solid transparent;

    &:hover {
      color: $accentColor;
      border-bottom-color: $accentColor;
    }
  }
}

.open-catalog {
  transition: all 0.5s;
  align-self: flex-end;
  max-height: 18px;
  font-size: 15px;
  margin-right: 3px;
  display: flex;
  align-items: center;

  .page-index-icon {
    margin-top: 1px;
    width: $pageArrowSize;
    height: $pageArrowSize;
    fill: currentColor;
  }
}

@media (max-width: $MQNarrow) {
  .page-index {
    margin-bottom: -1rem;
  }
}

// wide mobile
@media (max-width: $MQMobile) {
  .page-index {
    margin-top: 1.5rem;
    margin-bottom: -0.5rem;
  }
}

</style>