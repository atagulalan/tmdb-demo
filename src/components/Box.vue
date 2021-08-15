<template>
  <div class="boxComponent">
    <router-link :to="`/movie/${id}`" :title="title">
      <img loading="lazy" :src="image" :alt="title" width="440" height="660" />
    </router-link>
    <Pie class="boxPie" :percentage="percentage" :color="percentageColor" />
    <div class="content">
      <h3 class="title">
        <router-link :to="`/movie/${id}`" :title="title">
          {{ title }}
        </router-link>
      </h3>
      <p>{{ $dayjs(date).format('MMM DD, YYYY') }}</p>
    </div>
  </div>
</template>

<script>
import Pie from '@/components/Pie'
import colors from '@/data/pie-colors'

export default {
  name: 'Box',
  components: {
    Pie
  },
  computed: {
    percentageColor() {
      return colors.find((color) => this.percentage > color.min).highlight
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    percentage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.boxComponent {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 22px;
  width: 150px;
  min-width: 150px;
  margin-left: 20px;

  img {
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border-radius: var(--imageBorderRadius);
    width: 100%;
    height: auto;
    min-width: 150px;
    min-height: 225px;
    object-fit: contain;
  }

  .boxPie {
    margin-top: -0.5em;
    margin-left: 12px;
  }

  .content {
    padding: 12px 10px;

    .title {
      a {
        text-decoration: none;
        color: #000;
        &:hover {
          color: rgba(var(--tmdbLightBlue), 1);
        }
      }
    }
    p {
      color: grey;
      padding-top: 4px;
    }
  }
}
</style>
