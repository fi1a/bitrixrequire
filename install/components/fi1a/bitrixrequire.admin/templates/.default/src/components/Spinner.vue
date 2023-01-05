<template>
    <div class="vue-css-spinner" v-show="loading">
        <div class="circleOneContainer">
            <div class="circle" :style="css"></div>
        </div>
        <div class="circleTwoContainer">
            <div class="circle" :style="css"></div>
        </div>
        <div class="circleThreeContainer">
            <div class="circle" :style="css"></div>
        </div>
        <div class="circleFourContainer">
            <div class="circle" :style="css"></div>
        </div>
        <div class="circleFiveContainer">
            <div class="circle" :style="css"></div>
        </div>
        <div class="circleSixContainer">
            <div class="circle" :style="css"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Spinner',

    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: '#408ec0'
        }
    },

    data () {
        return {
            css: {
                background: this.color
            }
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.circleOneContainer,
.circleTwoContainer,
.circleThreeContainer,
.circleFourContainer,
.circleFiveContainer,
.circleSixContainer {
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 0;
    animation: rotate 5s infinite cubic-bezier(0.16, 0.54, 0.84, 0.54);
}

.circle {
  position: absolute;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 50%;
}

.circleTwoContainer {
  animation-delay: 150ms;
}

.circleThreeContainer {
  animation-delay: 300ms;
}

.circleFourContainer {
  animation-delay: 450ms;
}

.circleFiveContainer {
  animation-delay: 600ms;
}

.circleSixContainer {
  animation-delay: 750ms;
}

@keyframes rotate {
  0% {
    transform:rotate(180deg);
    opacity: 0;
  }
  2% {
    opacity: 1;
  }
  40% {
    transform: rotate(540deg);
    opacity: 1;
  }
  78% {
    opacity: 1;
  }
  80% {
    transform: rotate(900deg);
    opacity: 0;
  }
  100% {
    transform: rotate(1080deg);
    opacity: 0;
  }
}

.vue-css-spinner {
  width: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10000;
}

</style>