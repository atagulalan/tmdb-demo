<template>
  <div class="circularButtonComponent">
    <button
      :style="[
        background ? `background:${background}` : '',
        color ? `color:${color}` : '',
        weight ? `font-weight:${weight}` : '',
        width ? `width:${width}` : '',
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CircularButton',
  props: {
    background: {
      type: String,
      default: 'rgba(var(--tmdbDarkBlue), 1);',
    },
    color: {
      type: String,
      default: '#fff',
    },
    weight: {
      type: String,
      default: '700',
    },
    width: {
      type: String,
      default: '46px',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.circularButtonComponent {
  display: inline-block;
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s filter;
    aspect-ratio: 1/1; // circular buttons must have 1:1 aspect ratio

    &:hover {
      filter: brightness(1.1);
    }
  }
}
</style>
