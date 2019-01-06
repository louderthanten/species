<script>
import { Bar, mixins } from 'vue-chartjs'
import { currency } from '../mixins/currency'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp, currency],
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
    },
    format: {
      type: String,
      default: 'currency'
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
        display: this.legend,
        position: 'bottom',
        labels: {
          fontColor: '#B1B3B5'
        }
      },
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage: 0.9,
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
