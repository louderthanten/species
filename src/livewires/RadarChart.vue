<script>
import { Radar, mixins } from 'vue-chartjs'

export default {
  extends: Radar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: [Object, Boolean],
      default: false
    },
    gridColour: {
      type: String,
      default: '#DCDBD7'
    },
    textColour: {
      type: String,
      default: '#DCDBD7'
    },
    title: {
      type: String,
      default: ''
    },
    legend: {
      type: [Array, Boolean],
      default: false
    }
  },
  mounted () {
    this.renderChart(this.chartData, {
      title: {
        display: true,
        text: this.title,
        fontColor: this.textColour,
        fontFamily: 'acumin-pro-semi-condensed, system, -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", "Arial", sans-serif'
      },
      scale: {
        ticks: {
          display: false,
          showLabelBackdrop: false
        },
        gridLines: {
          color: this.gridColour
        }
      },
      legend: {
        display: this.legend
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const tooltipLabel = data.labels[tooltipItem.index]
            const dataset = data.datasets[tooltipItem.datasetIndex]
            const currentValue = dataset.data[tooltipItem.index]
            return tooltipLabel + ': ' + currentValue + '%'
          }
        }
      }
    })
  }
}
</script>
