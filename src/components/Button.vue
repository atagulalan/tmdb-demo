<template>
  <div class="buttonComponent">
    <button
      :style="[
        background ? `background:${background}` : '',
        color ? `color:${color}` : '',
        weight ? `font-weight:${weight}` : '',
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    background: {
      type: String,
      default:
        'linear-gradient(to right, rgba(var(--tmdbLightGreen), 1) 0%, rgba(var(--tmdbLightBlue), 1) 100%);',
    },
    color: {
      type: String,
      default: '#fff',
    },
    weight: {
      type: String,
      default: '700',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.buttonComponent {
  display: inline-block;
  button {
    font-size: 16px;
    height: 100%;
    padding: 10px 26px;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s filter;
    &:hover {
      filter: brightness(1.1);
    }
  }
}
</style>
