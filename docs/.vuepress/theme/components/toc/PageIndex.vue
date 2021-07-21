<template>
  <div class="page-index" :class="{'hide-index': indexState}" v-if="showCatalog || inTouch">
    <div class="page-index-title" @click="clickIndex()">
      <span class="open-catalog" :class="{ active: showIndex }">
        <svg
          class="page-index-icon arrow-right"
          :class="{ 'is-down': showIndex }"
          aria-hidden="true"
          id="icon-arrow-right"
          viewBox="0 0 1024 1024"
        >
          <path d="M797.21457646 444.0233542C639.18078066 323.41640029 481.14698487 202.80944727 323.13223847 82.18344394 266.85068662 39.24639688 185.76131065 79.36563623 185.76131065 150.16009062v723.67823145c0 70.7944544 81.08937597 110.91528018 137.37092782 67.95918369 158.01474638-120.60854033 316.04854219-241.21390605 474.08233799-361.83832207 44.83410644-34.21851065 44.83410644-101.69985674 0-135.93582949z"></path>
        </svg>
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
import TOC from './components/TableOfContents'
export default {
  components: { TOC },
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

.arrow-right {
  margin-right: 5px;
  width: 10px;
  height: 10px;
  transition: transform 0.16s ease-out;

  &.is-down {
    transform: rotate(90deg);
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