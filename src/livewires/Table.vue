<template>
  <div class="overflow-x">
    <table :class="[size, 'table--' + type]" :id="id">
      <thead v-if="xTitle || headings">
        <tr v-if="xTitle"><th/><th :colspan="spanLength" class="text-center axis-title">{{ xTitle }}</th></tr>
        <tr>
          <th v-for="(heading, i) in headings" :class="cellStyle(i)" :key="i" class="relative pt1">{{ heading }} <lw-tip v-if="tips && tips[i]" :content="tips[i]" :class="'absolute table-tip'" /></th>
        </tr>
      </thead>
      <template v-if="draggable">
        <slot/>
      </template>
      <tbody v-else>
        <slot/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Tip from './Tip'

export default {
  components: {
    lwTip: Tip
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    xTitle: {
      type: String,
      default: ''
    },
    headings: {
      type: Array,
      default: null
    },
    draggable: {
      type: Boolean,
      default: false
    },
    alignment: {
      type: Array,
      default: null
    },
    widths: {
      type: Array,
      default: null
    },
    tips: {
      type: Array,
      default: null
    }
  },
  computed: {
    spanLength () {
      return this.headings.length - 1
    }
  },
  methods: {
    cellStyle (i) {
      let align = ''
      let width = ''
      if (this.alignment) {
        align = 'align-' + this.alignment[i]
      }
      if (this.widths) {
        width = ' t' + this.widths[i]
      }
      return align + width
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
  display: table;
  width: 100%;
  margin-bottom:var(--line);
}
table  ul,
table  ol,
table  dl,
table  p {
  margin-bottom: 0;
}
table img {
  max-width: 100%;
}
[colspan="1"]{
  text-align: left;
}
[rowspan]{
  vertical-align: middle;
}
[rowspan="1"]{
  vertical-align: top;
}
td,
th {
  font-family: var(--semi-condensed);
  vertical-align: top;
  padding: calc(var(--line) * 0.5) calc(var(--line) * 0.5);
}

th {
  font-size: var(--font-size-2);
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-family: var(--sans);
  font-weight: var(--bold);
}
.numeric,
.numerical,
.delete {
  text-align: right;
}
thead th,
thead td,
tfoot th,
tfoot td{
  vertical-align: bottom;
}
.axis-title {
  border:none;
}

.table--bordered th,
.table--bordered td {
  border:var(--rule);
}
.table--bordered th,
.table--bordered td:empty{
  border:none;
}
.table--lined tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.table--lined th:first-child,
.table--lined td:first-child {
  padding-left: 0;
}
.table--lined th:last-child,
.table--lined td:last-child {
  padding-right: 0;
}
.table--lined tbody:first-child tr:first-child {
  border-top: var(--border);
  border-top-width: calc(var(--line) / 4);
}
.table--lined thead tr {
  border-bottom: var(--border);
  border-bottom-width: calc(var(--line) / 4);
  border-top: none;
}
.table--lined tbody:first-child thead th {
  padding-bottom: calc(var(--line) * 0.25);
}
.table--lined tbody:first-child tfoot th,
.table--lined tbody:first-child tfoot td {
  padding-top: calc(var(--line) * 2);
  padding-bottom: 0;
}
.table--lined.table--lined--foreground tr,
.table--lined.table--lined--foreground tbody:first-child tr:first-child,
.table--lined.table--lined--foreground thead tr {
  border-color: var(--foreground);
  border-bottom-color: var(--foreground);
  border-top-color: var(--foreground);
}
.table--striped tbody tr:nth-child(odd) td {
  background: var(--grey-200);
  border-top: 1px solid var(--grey-250);
  border-bottom: 1px solid var(--grey-250);
}

.table--tight th,
.table--tight td {
  font-size: var(--font-size-2);
  padding: calc(var(--line) * 0.23) calc(var(--line) * 0.5) calc(var(--line) * 0.27) calc(var(--line) * 0.5);
}
.table--tight.table--lined th,
.table--tight.table--lined td {
  padding-left: 0;
  padding-right: 0;
}
.table-tip {
  bottom: calc(var(--line) * 0.333);
  right: calc(var(--line) * -0.25);
}
@media only screen and (max-width: 48em) {
  table tr{
    width:100%;
    margin-right: 1em;
  }
  .table--bordered  td {
    border-top: none;
  }
  .table--mobile td,
  .table--mobile th {
    padding: calc(var(--line) * 0.5);
  }
  .table--mobile tbody,
  .table--mobile tfoot,
  .table--mobile tbody th,
  .table--mobile tbody td {
    display: block !important;
  }
  .table--mobile tbody tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: calc(var(--line) / 2);
    grid-auto-flow: row;
  }
  .table--mobile thead {
    display: none;
  }
  .table--mobile thead,
  .table--mobile tfoot,
  .table--mobile tbody,
  .table--mobile tr {
    clear:both;
  }
  .table--mobile tr {
    overflow: hidden;
    padding: 0 0 calc(var(--line) * 0.5) 0;
  }
  .table--mobile td {
    padding: 0;
    text-align: left;
  }
  .table--mobile td:first-child {
    grid-column: span 2;
  }
  .table--mobile td:before {
    content: attr(data-label);
    display:block;
    font-weight: var(--semibold);
    font-size: var(--font-size-2);
  }
  .table--mobile .numeric,
  .table--mobile .numerical,
  .table--mobile .delete,
  .table--mobile td.price {
    text-align: left;
  }
  .table--mobile td.numerical,
  .table--mobile td.numeric {
    text-transform: uppercase;
  }
}
@media only screen and (min-width: 48em) {
  td,
  th {
    padding: calc(var(--line) / 2.8) calc(var(--line) * 0.5) calc(var(--line) / 3.2) calc(var(--line) * 0.5);
  }
}
</style>
