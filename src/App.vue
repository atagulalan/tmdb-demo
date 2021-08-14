<template>
  <NavBar />
  <div class="page-content">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

/* TMDB Colors */
html {
  --scrollerGrey: 219, 219, 219;
  --lightGrey: 227, 227, 227;
  --darkerGrey: 200, 200, 200;
  --tmdbDarkBlue: 3, 37, 65;
  --tmdbLightBlue: 1, 180, 228;
  --tmdbLighterGreen: 192, 254, 207;
  --tmdbLightGreen: 30, 213, 169;
  --tmdbLogoRed: 217, 59, 99;
  --accountTeal: 1, 198, 172;
  --imageBorderRadius: 8px;
  --maxPrimaryPageWidth: 1300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}

button {
  background: transparent;
  color: inherit;
  border: 0;
}

.page-content {
  padding-top: 64px;
}

.flex-center {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
