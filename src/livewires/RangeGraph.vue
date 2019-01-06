<template>
  <div class="rangeGraph">
    <span class="value value--base hidden">$0</span>
    <div v-if="maxPrice >= minPrice" :style="{ left: fullRange.leftPosition, width: fullRange.width }"  class="fullRange">
      <span :class="minPrice < (maxPrice * 0.333) ? 'min' : ''" class="value value--low"><span class="font-size-1 semibold block uppercase wide">Low</span>{{ minPrice | currency }}</span>
      <template v-if="midPrice">
        <div v-if="minMidPrice > 0"
             :style="{
               left: targetRange.lowStart,
               width: targetRange.lowWidth}"
             class="lowerRange accent z0">
          <span v-if="minMidPrice > minPrice" class="value value--mid-low mobile-hidden hidden">{{ minMidPrice | currency }}</span>
        </div>
        <div :style="{ left: 'calc(' + fullRange.midPoint + ' - 2px)' }" class="midPoint z2"><span v-if="midPrice > minPrice && midPrice < maxPrice" class="value value--mid"><span class="font-size-1 semibold block uppercase wide">Target</span>{{ midPrice | currency }}</span></div>
        <div v-if="midMaxPrice > 0"
             :style="{
               left: targetRange.highStart,
               width: targetRange.highWidth }"
             class="upperRange accent z0">
          <span v-if="midMaxPrice < maxPrice" class="value value--mid-high mobile-hidden hidden">{{ midMaxPrice | currency }}</span>
        </div>
      </template>
      <span :class="maxPrice > (minPrice * 1.6667) ? 'max' : ''" class="value value--high"><span class="font-size-1 semibold block uppercase wide">High</span>{{ maxPrice | currency }}</span>
    </div>
    <span class="value value--max mobile-hidden hidden">{{ maxRange | currency }}</span>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: [String, Number],
      default: 0
    },
    minPrice: {
      type: [String, Number],
      default: 0
    },
    minMid: {
      type: [String, Number],
      default: 0
    },
    minMidPrice: {
      type: [String, Number],
      default: 0
    },
    mid: {
      type: [String, Number],
      default: 0
    },
    midPrice: {
      type: [String, Number],
      default: 0
    },
    midMax: {
      type: [String, Number],
      default: 0
    },
    midMaxPrice: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 0
    },
    maxPrice: {
      type: [String, Number],
      default: 0
    },
    spread: {
      type: [String, Number],
      default: 3
    }
  },
  computed: {
    targetRange () {
      const range = this.spread
      const totalWidth = this.max - this.min
      const lowWidth = ((this.mid - this.min) / range) / totalWidth * 100
      const lowStart = lowWidth * 2
      const highWidth = ((this.max - this.mid) / range) / totalWidth * 100
      const highStart = lowWidth * 3

      return {
        lowWidth: lowWidth + '%',
        lowStart: lowStart + '%',
        highWidth: highWidth + '%',
        highStart: highStart + '%'
      }
    },
    maxRange () {
      return this.maxPrice / 0.9
    },
    fullRange () {
      const total = this.max * 1.1111
      let left = (this.min / total) * 100
      if (left < 10) {
        left = 10
      }
      let width = 90 - left
      if (width < 0) {
        width = 1
      }
      if (width > 90) {
        width = 90
      }
      const midPoint = ((this.mid - this.min) / (this.max - this.min)) * 100

      return {
        leftPosition: left + '%',
        width: width + '%',
        midPoint: midPoint + '%'
      }
    }
  }
}
</script>

<style scoped>
  .rangeGraph {
    position: relative;
    width: 100%;
  }
  .rangeGraph:before {
    content: '';
    position: absolute;
    left: 0;
    border-top: var(--foreground-border);
    top: 50%;
    width: 100%;
    height:0;
  }
  .fullRange {
    position:relative;
    height: calc(var(--line) * 3);
    border-left: var(--foreground-border);
    border-right: var(--foreground-border);
    border-left-width: 4px;
    border-right-width: 4px;
  }
  .fullRange:before {
    content: '';
    position: absolute;
    left: 0;
    border-top: var(--foreground-border);
    border-top-width: 4px;
    top: calc(50% - 2px);
    width: 100%;
    height:0;
  }
  .lowerRange,
  .upperRange {
    position:absolute;
    height: 100%;
    top:0;
    bottom:0;
    transition: 0.2s all ease-in-out;
  }
  .midPoint {
    position: absolute;
    transition: 0.2s all ease-in-out;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--foreground);
    height: 100%;
  }
  .value {
    font-size: var(--font-size-7);
    line-height: 0.8;
    position: absolute;
    bottom: -1.4em;
    font-family: var(--extra-condensed);
    display:none;
  }
  .value--low {
    left: 0;
    text-align:left;
  }
  .value--mid-low {
    right: 100%;
    text-align: right;
  }
  .value--mid {
    text-align: center;
    margin-left: -100%;
    top: -1.667em;
  }
  .value--mid-high {
    left: 100%;
    text-align: left;
  }
  .value--high {
    text-align: right;
    right:0%;
  }
  .value--max {
    right: 0;
    text-align:right;
  }
  @media only screen and (min-width: 48em) {
    .value {
      display: block;
    }
    .value--low {
      right: 100%;
      left: auto;
      text-align:right;
    }
    .value--high {
      text-align: left;
      right: auto;
      left:100%;
    }
    .fullRange {
      border-left: var(--foreground-border);
      border-right: var(--foreground-border);
    }
    .fullRange:before {
      border-top: var(--foreground-border);
      border-width: 5px;
      top: calc(50% - 2px);
    }
    .midPoint {
      width: 5px;
    }
  }
</style>
