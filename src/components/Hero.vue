<template>
  <div class="heroComponent">
    <div class="background" />

    <div class="flex-center align-center">
      <div class="content">
        <div class="title">
          <h1>{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
        </div>
        <Search placeholder="Film, dizi, kişi ara..." />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  name: 'Hero',
  components: {
    Search,
  },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
  },
}
</script>

<style scoped lang="scss">
.heroComponent {
  scroll-padding-top: 64px;
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  width: 100%;
  position: relative;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(var(--tmdbDarkBlue), 0.8) 0%,
        rgba(var(--tmdbDarkBlue), 0) 100%
      ),
      url('../assets/hero_demo.jpg');
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  .content {
    width: 100%;
    color: white;
    max-width: var(--maxPrimaryPageWidth);
    padding: 30px 36px;

    .title {
      margin-bottom: 54px;

      h1 {
        font-size: 3em;
        font-weight: 700;
        line-height: 1;
        padding-bottom: 4px;
      }
      h2 {
        font-size: 2em;
        font-weight: 600;
        margin: 0;
      }
    }
  }
}
</style>
