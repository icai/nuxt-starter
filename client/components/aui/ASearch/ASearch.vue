<template>
  <div class="a-search">
    <div class="app-container search-container">
      <slot>
        <el-form ref="form" :model="value" :label-position="labelPosition" :label-width="labelWidth">
          <el-row :gutter="24">
            <el-col v-bind="_span(item.span)" v-for="(item, index) in options" :key="item.key" v-show="_getShow(item, index)">
              <el-form-item :label="item.label" :prop="item.key">
                <template #label>
                  <slot :scope="item" :name="item.key + '-label'" />
                </template>
                <template v-if="item.type === 'input'">
                  <el-input
                    :value="value[item.key]"
                    :placeholder="item.placeholder"
                    :disabled="item.disabled"
                    clearable
                    @input="$_inputChange(item.key, $event)"
                    style="width: 100%"
                  />
                </template>
                <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
                  <el-date-picker
                    :value="value[item.key]"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :format="item.format || undefined"
                    :value-format="item.valueFormat || undefined"
                    @input="$_inputChange(item.key, $event)"
                    style="width: 100%; height: 33px"
                  />
                </template>
                <template v-if="item.type === 'daterange'">
                  <el-date-picker
                    :value="value[item.key]"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :value-format="item.valueFormat || ''"
                    :default-time="item.defaultTime || ['00:00:00', '23:59:59']"
                    @input="$_inputChange(item.key, $event)"
                    style="width: 100%"
                  />
                </template>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </slot>
      <slot name="form-extra"></slot>
    </div>
    <div class="a-toolbar clearfix" v-if="$slots.action || $slots.extra || $slots.tools">
      <div class="extra float-start">
        <slot name="action" v-if="!_isEmptyObject($attrs.value)">
          <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
          <el-button type="default" icon="el-icon-refresh" @click="onReset">重置</el-button>
          <el-button type="text" v-if="options.length > threshold" @click="ellipsis = !ellipsis">
            {{ ellipsis ? '收起' : '展开' }}
            <i class="el-icon--right" :class="_icon" />
          </el-button>
        </slot>
        <slot name="extra" />
      </div>
      <div class="float-end">
        <slot name="tools" />
      </div>
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  name: 'ASearch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    span: {
      type: [String, Number],
      default: 6
    },
    // 阈值
    threshold: {
      type: [String, Number],
      default: 12
    }
  },
  data() {
    return {
      ellipsis: false
    }
  },
  computed: {
    _icon() {
      return this.ellipsis ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    },
    _span() {
      return (layout) => {
        return { span: layout || this.span }
      }
    },
    _getShow() {
      return ({ hidden }, index) => {
        if (hidden) {
          return false
        }
        return this.ellipsis ? true : this.threshold - index >= 0
      }
    }
  },
  methods: {
    _isEmptyObject(obj) {
      return !(obj && Object.keys(obj).length)
    },
    onSearch() {
      this.$emit('update:value', { ...this.value })
      this.$emit('search', { ...this.value })
    },
    onReset() {
      this.$emit('update:value', {})
      this.$emit('reset', {})
    },
    $_inputChange(key, event) {
      if (typeof event == 'string') {
        event = event.replace(/\s/g, '')
      }
      this.$emit('update:value', { ...this.value, [key]: event })
      this.$emit('change', { ...this.value, [key]: event })
    }
  },
  emits: ['update:value', 'search', 'reset', 'change']
}
</script>

<style lang="scss" scoped>
.a-search {
  :deep() {
    .el-form-item--small .el-form-item__content,
    .el-form-item--small .el-form-item__label {
      height: 32px;
    }
  }

  .a-toolbar {
    margin: 5px 5px 15px;
  }
}
</style>
