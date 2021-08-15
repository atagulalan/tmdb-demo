<template>
  <div class="notFoundPage">
    <div class="wrapper">
      <h1>Oops! We can't find the page you're looking for</h1>
      <p>
        You tried to request a page that doesn't exist. If you believe this to
        be in error, let us know on the forums.
      </p>
      <Button @click="$router.go(-1)">Go Back</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'NotFound',
  components: {
    Button,
  },
}
</script>

<style lang="scss">
.notFoundPage {
  display: flex;
  justify-content: center;
  .wrapper {
    padding: 40px;
    width: var(--maxPrimaryPageWidth);
    & > * {
      margin: 10px 0;
    }
  }
}
</style>
