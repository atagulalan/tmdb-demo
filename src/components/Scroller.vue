<template>
  <div class="scrollerComponent fading">
    <div class="header">
      <slot name="title"></slot>
    </div>
    <div class="scrollWrapper" ref="wrapper" :data-scroll="scroll">
      <div class="scrollInner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroller',
  data() {
    return {
      scroll: 0
    }
  },
  mounted() {
    this.$refs.wrapper.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$refs.wrapper.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.scroll = parseInt(event.currentTarget.scrollLeft)
    }
  },
  props: {
    background: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.scrollerComponent {
  position: relative;
  display: inline-block;
  max-width: var(--maxPrimaryPageWidth);

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
  }
  .scrollWrapper {
    overflow: auto;
    width: 100%;
    &:after {
      content: '';
      width: 60px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        #fff 100%
      );
      will-change: opacity;
      pointer-events: none;
      transition: 0.3s opacity;
    }
    &:not([data-scroll='0']):after {
      transition: 0.3s opacity;
      opacity: 0;
    }
    .scrollInner {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
      padding-left: 16px;
    }
  }
}
</style>
