<script>
import { Pie, mixins } from 'vue-chartjs'

export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: [Object, Boolean],
      default: false
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
        display: false,
        text: this.title,
        fontColor: '#B1B3B5',
        fontSize: 16
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
