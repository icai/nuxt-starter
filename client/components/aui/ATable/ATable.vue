<template>
  <div class="a-table">
    <div class="a-table-list-toolbar" v-if="$slots['toolbar-title'] || $slots['toolbar-space']">
      <div class="a-table-list-toolbar-container">
        <div class="toolbar-title">
          <slot name="toolbar-title" />
        </div>
        <div class="toolbar-space">
          <slot name="toolbar-space" />
        </div>
      </div>
    </div>
    <el-table v-bind="$attrs" v-loading="loading" ref="table" style="width: 100%">
      <slot name="selection" />
      <slot name="pre-column" />
      <template v-for="column in columns">
        <el-table-column v-if="['selection', 'index', 'expand'].includes(column.type)" :type="column.type"></el-table-column>
        <template v-else-if="!!!column.hidden">
          <el-table-column v-bind="column" :key="column.label">
            <template v-slot="scope">
              <a-edit-column
                v-bind="column.editProp || column"
                :can-edit="!!column.inputType || column.canEdit || editable"
                :showInput="column.showInput || (showInput && !!column.inputType)"
                :inputType="column.inputType"
                v-model:value="scope.row[column.prop]"
                @tableChange="$_change(scope.row, column.prop, $event)"
              >
                <template #content>
                  <slot :scope="scope" :name="column.prop"> </slot>
                </template>
              </a-edit-column>
            </template>
          </el-table-column>
        </template>
      </template>
      <slot />
    </el-table>
    <div class="pagination-container col-12 p-3">
      <el-pagination v-bind="pagina" :background="true" v-on="listenPaination" />
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
/* eslint-disable */
import AEditColumn from './AEditColumn.vue'
export default {
  name: 'ATable',
  components: {
    AEditColumn
  },
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          total: 0,
          pageSize: 10,
          currentPage: 1
        }
      }
    },
    columns: Array
  },
  data() {
    return {
      loading: false,
      change: false
    }
  },
  created() {
    this.listenPaination = {
      'size-change': this.handleSizeChange,
      'current-change': this.handleCurrentChange
    }
    $on(this, 'loading', (loading) => {
      this.loading = loading
    })
  },
  computed: {
    pagina() {
      return {
        ...Object.assign({}, { background: true, pageSizes: [10, 20, 50, 100] }, this.pagination),
        layout: 'total, sizes, prev, pager, next, jumper'
      }
    }
  },
  methods: {
    $_change(row, prop, value) {
      this.change = true
    },
    // validate table input data change or not
    validateChange() {
      return new Promise((resolve, reject) => {
        if (this.change) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    },
    getList(params) {
      this.$emit('query', params)
    },
    handleSizeChange(val) {
      this.$emit('update:pagination', { ...this.pagination, pageSize: val })
      this.getList({ pageSize: val })
    },
    handleCurrentChange(val) {
      this.$emit('update:pagination', { ...this.pagination, currentPage: val })
      this.getList({ currentPage: val })
    }
  },
  emits: ['query', 'update:pagination']
}
</script>
