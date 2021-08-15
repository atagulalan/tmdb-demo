<template>
  <div
    :class="['pieComponent', isMoreThan50 ? 'moreThan50' : 'lessThan50']"
    :style="`font-size:${size}em;`"
  >
    <label :style="`background:${background}`">{{ percentage }}</label>
    <div
      class="pie"
      :style="
        `border-color: ${color};
        box-shadow: 0 0 0 ${outerWidth / 100}em ${background};`
      "
    >
      <div class="background" :style="`border-width:${barWidth}em`"></div>
      <div
        class="left"
        :style="
          `transform: rotate(${leftRotation}deg);
      border-width:${barWidth}em`
        "
      ></div>
      <div
        class="right"
        :style="
          `transform: rotate(${rightRotation}deg);
        border-width:${barWidth}em`
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pie',
  props: {
    barWidth: {
      type: String,
      default: '0.06',
    },
    size: {
      type: String,
      default: '2.1',
    },
    percentage: {
      type: String,
      default: '100',
    },
    color: {
      type: String,
      default: '#fff',
    },
    background: {
      type: String,
      default: '#081C22',
    },
    outerWidth: {
      type: String,
      default: '7',
    },
  },
  computed: {
    isMoreThan50: function() {
      return this.percentage > 50
    },
    leftRotation: function() {
      return (this.percentage / 100) * 360
    },
    rightRotation: function() {
      let rotation = (this.percentage / 100) * 360
      return rotation > 180 ? 180 : rotation
    },
  },
}
</script>

<style scoped lang="scss">
.pieComponent {
  height: 1em;
  width: 1em;
  float: left;
  position: relative;

  .pie {
    height: 100%;
    width: 100%;
    border-radius: 50%;

    div {
      height: 100%;
      width: 100%;
      border: 0.1em solid transparent;
      border-radius: 50%;
      clip: rect(0, 0.5em, 1em, 0);
      left: 0;
      position: absolute;
      top: 0;
      border-color: inherit;

      &.background {
        clip: initial;
        opacity: 0.3;
      }
    }
  }

  label {
    border-radius: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 0.4em;
    position: absolute;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: '%';
      color: #fff;
      font-size: 0.5em;
      padding-bottom: 0.5em;
      vertical-align: super;
      // font-size cant be smaller than 0.5em
      // so we scale it down a bit
      transform: scale(0.7);
    }
  }

  &.lessThan50 .pie .left {
    display: none;
  }
  &.moreThan50 .pie {
    clip: rect(auto, auto, auto, auto);
  }
}
</style>
