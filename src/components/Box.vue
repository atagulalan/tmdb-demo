<template>
  <div class="boxComponent">
    <a href="/tv/69050" :title="title">
      <img loading="lazy" :src="image" :alt="title" />
    </a>
    <Pie class="boxPie" :percentage="percentage" color="#21D07A" />
    <div class="content">
      <h3 class="title">
        <a href="/tv/69050" :title="title">{{ title }}</a>
      </h3>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
import Pie from '@/components/Pie'

export default {
  name: 'Box',
  components: {
    Pie,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    percentage: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
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
