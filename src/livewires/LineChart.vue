<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
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
        display: true,
        text: this.title,
        fontColor: '#B1B3B5'
      },
      legend: {
        display: this.legend
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            fontColor: '#B1B3B5'
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            fontColor: '#B1B3B5'
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            const dataset = data.datasets[tooltipItem.datasetIndex]
            let currentValue = dataset.data[tooltipItem.index]
            if (this.format === 'currency') {
              currentValue = '$' + currentValue
            }
            if (this.format === 'percent') {
              currentValue = currentValue + '%'
            }
            return '$' + currentValue
          }
        }
      }
    })
  }
}
</script>
