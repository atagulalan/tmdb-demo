<template>
  <div class="homePage">
    <Hero
      title="Hoş Geldiniz."
      subtitle="Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin."
    />
    <div class="content" v-if="boxes">
      <Scroller>
        <template v-slot:title>
          <h2>Popüler Olanlar</h2>
        </template>
        <Box
          v-for="box in boxes"
          :key="box.id"
          :id="box.id"
          :image="
            `https://www.themoviedb.org/t/p/w440_and_h660_face/${box.poster_path}`
          "
          :percentage="box.vote_average * 10"
          :title="box.title"
          :date="box.release_date"
        ></Box>
      </Scroller>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Scroller from '@/components/Scroller.vue'
import Box from '@/components/Box.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Scroller,
    Box,
  },
  data() {
    return {
      boxes: {},
    }
  },
  mounted() {
    this.populatePopular()
  },
  methods: {
    populatePopular() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1`
        )
        .then((response) => {
          this.boxes = response.data.results
        })
        .catch((err) => {
          this.error = err.toString()
        })
    },
  },
}
</script>

<style lang="scss">
.homePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  .content {
    width: 100%;
    max-width: var(--maxPrimaryPageWidth);
    overflow: hidden;
  }

  .scrollerComponent {
    padding-top: 34px;
    h2 {
      padding: 0 36px;
      font-weight: 600;
      font-size: 1.5em;
    }
  }
}
</style>
