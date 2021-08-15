<template>
  <div class="moviePage" v-if="data">
    <div
      class="background"
      :style="
        `background:url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`
      "
    ></div>

    <div class="wrapper">
      <div class="poster">
        <img
          loading="lazy"
          :src="
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`
          "
          :alt="`${data.original_title} Poster`"
        />
      </div>
      <div class="details">
        <h1>
          {{ data.original_title }}
          <small v-if="releaseYear">({{ releaseYear }})</small>
        </h1>
        <div class="subdetails">
          <div class="rated">R</div>
          <div class="released">{{ humanReleaseDate }}</div>
          <div class="genres">
            <span
              class="genre"
              v-for="(genre, index) in genres"
              :key="genre.id"
            >
              <router-link :to="`/genre/${genre.id}`">
                {{ genre.name }}
              </router-link>
              <span v-if="index + 1 < genres.length">, </span>
            </span>
          </div>
          <div class="duration">{{ humanRuntime }}</div>
        </div>
        <div class="actions">
          <Pie
            class="userScorePie"
            :percentage="percentage"
            :color="percentageColor"
            size="4"
          />
          <span class="userScoreText"> User<br />Score </span>
          <CircularButton>
            <font-awesome-icon icon="list" :style="{ fontSize: '12px' }" />
          </CircularButton>
          <CircularButton>
            <font-awesome-icon icon="heart" :style="{ fontSize: '12px' }" />
          </CircularButton>
          <CircularButton>
            <font-awesome-icon icon="bookmark" :style="{ fontSize: '12px' }" />
          </CircularButton>
          <CircularButton>
            <font-awesome-icon icon="star" :style="{ fontSize: '12px' }" />
          </CircularButton>
          <router-link :to="`#`">
            <font-awesome-icon icon="play" :style="{ fontSize: '12px' }" />
            Play Trailer
          </router-link>
        </div>
        <div class="tagLine">
          {{ data.tagline }}
        </div>
        <h3>Overview</h3>
        <p>{{ data.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pie from '@/components/Pie'
import CircularButton from '@/components/CircularButton'
import colors from '@/data/pie-colors'

export default {
  data() {
    return {
      data: null,
      movieId: this.$route.params.id,
    }
  },
  components: {
    Pie,
    CircularButton,
  },
  computed: {
    percentage() {
      return (this.data.vote_average || 0) * 10
    },
    percentageColor() {
      return colors.find((color) => this.percentage >= color.min).highlight
    },
    genres() {
      return (this.data && this.data.genres) || []
    },
    releaseYear() {
      return this.data && this.$dayjs(this.data.release_date).format('YYYY')
    },
    humanReleaseDate() {
      return (
        this.data && this.$dayjs(this.data.release_date).format('MM/DD/YYYY')
      )
    },
    humanRuntime() {
      return (
        this.data &&
        this.$dayjs
          .duration() // 0 ms
          .add(this.data.runtime, 'minutes')
          .format('H[h] m[m]') // 2h 12m
      )
    },
  },
  mounted() {
    this.populateMovie()
  },

  methods: {
    populateMovie() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${process.env.VUE_APP_APIKEY}&language=en-US`
        )
        .then((response) => {
          this.data = response.data
        })
        .catch((err) => {
          this.error = err.toString()
        })
    },
  },
}
</script>

<style scoped lang="scss">
.moviePage {
  position: relative;
  display: flex;
  justify-content: center;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // TODO make this reactive to color of poster
      background-image: linear-gradient(
        to right,
        rgba(var(--tmdbDarkBlue), 1) 150px,
        rgba(var(--tmdbDarkBlue), 0.84) 100%
      );
      z-index: 1;
    }
  }

  .wrapper {
    padding: 30px 40px;
    max-width: var(--maxPrimaryPageWidth);
    width: 100%;
    display: flex;

    .poster {
      min-width: 300px;
      width: 300px;
      min-height: 450px;
      height: auto;
      border-radius: var(--imageBorderRadius);
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        min-width: 100%;
        height: 100%;
        min-height: 100%;
        object-fit: cover;
      }
    }
    .details {
      color: white;
      padding-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: flex-start;
      flex-wrap: nowrap;

      h1 {
        font-size: 2.2rem;
        font-weight: 700;
        small {
          font-weight: 400;
          opacity: 0.8;
        }
      }

      .subdetails {
        display: flex;
        align-items: center;
        margin: 4px 0 36px;

        & > * {
          position: relative;
        }
        & > *:nth-child(n + 3) {
          padding-left: 20px;
          &:before {
            content: '\2022';
            font-size: 1.1em;
            position: absolute;
            left: 7px;
            z-index: -1;
          }
        }
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            opacity: 0.8;
          }
        }

        .rated {
          padding: 2px 4px;
          border: 1px solid white;
          border-radius: 2px;
          opacity: 0.6;
          margin-right: 6px;
        }
      }

      .userScorePie {
        transition: 0.3s transform;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }

      .actions {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        & > * {
          margin-right: 20px;
        }
        .userScoreText {
          font-size: 1em;
          font-weight: 700;
        }
        a {
          color: #fff;
          text-decoration: none;
          transition: 0.3s opacity;
          svg {
            margin-right: 8px;
          }
          &:hover {
            opacity: 0.6;
          }
        }
      }

      .tagLine {
        opacity: 0.7;
        font-style: italic;
        font-size: 1.1em;
      }

      h3 {
        font-size: 1.3em;
        font-weight: 600;
        margin: 10px 0;
      }

      p {
        font-size: 1em;
        line-height: 1.3;
      }
    }
  }
}
</style>
