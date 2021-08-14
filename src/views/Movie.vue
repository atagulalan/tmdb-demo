<template>
  <div class="movie">
    {{ movieId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: this.$route.params.id,
    }
  },
}
</script>
