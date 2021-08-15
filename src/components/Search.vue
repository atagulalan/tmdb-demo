<template>
  <div class="searchComponent">
    <input :type="type" :placeholder="placeholder" />
    <Button>Search</Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Search',
  components: {
    Button
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped lang="scss">
.searchComponent {
  position: relative;
  margin-right: 8px;

  input {
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(var(--tmdbDarkBlue), 1);
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    &:focus {
      outline: 0;
    }
  }

  .buttonComponent {
    position: absolute;
    top: 0;
    right: -1px;
    height: 46px;
  }
}
</style>
