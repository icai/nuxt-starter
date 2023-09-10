<template>
  <el-form v-bind="$attrs" class="a-form" ref="form" :model="value" :rules="rules">
    <el-row :gutter="24">
      <el-col v-for="(item, index) in _options" :key="index" :span="item.span ? item.span : 24 / row">
        <el-form-item :key="item.key" :label="item.label" :prop="item.key" :rules="item.rules">
          <slot :scope="item" :name="item.key">
            <template v-if="['input', 'digit', 'number'].includes(item.type)">
              <div class="flex" v-if="item.suffix">
                <el-input
                  :value="value[item.key]"
                  :placeholder="item.placeholder"
                  :disabled="item.disabled"
                  :maxlength="item.maxlength || 200"
                  :show-word-limit="item.showWordLimit"
                  clearable
                  @input="$_inputChange(item, $event)"
                  :style="'width:' + (item.width ? item.width + 'px' : '100%')"
                >
                </el-input>
                <span class="suffix" v-if="item.suffix">
                  {{ item.suffix }}
                </span>
              </div>
              <el-input
                v-else
                :value="value[item.key]"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :maxlength="item.maxlength || 200"
                :show-word-limit="item.showWordLimit"
                clearable
                @input="$_inputChange(item, $event)"
                :style="'width:' + (item.width ? item.width + 'px' : '100%')"
              >
              </el-input>
            </template>
            <template v-if="item.type === 'textarea'">
              <el-input
                type="textarea"
                :value="value[item.key]"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                clearable
                :maxlength="item.maxlength || 200"
                :show-word-limit="item.showWordLimit"
                :autosize="item.autosize || { minRows: 5 }"
                resize="none"
                @input="$_inputChange(item, $event)"
                style="width: 100%"
              />
            </template>
            <template v-if="item.type === 'radio'">
              <el-radio-group :value="value[item.key]" @input="$_inputChange(item, $event)">
                <el-radio v-for="(sub, idx) in item.options" :key="idx" :label="sub.value">
                  {{ sub.label }}
                </el-radio>
              </el-radio-group>
            </template>
            <template v-if="item.type === 'checkbox'">
              <el-checkbox-group :value="value[item.key]" @input="$_inputChange(item, $event)">
                <el-checkbox v-for="(sub, idx) in item.options" :key="idx" :label="sub.label" :name="sub.value" />
              </el-checkbox-group>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                :value="value[item.key]"
                :multiple="item.multiple"
                :collapse-tags="item.multiple"
                :filterable="item.remote"
                :remote="item.remote"
                :reserve-keyword="item.remote"
                :remote-method="remoteMethod"
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                :loading="loading"
                clearable
                @input="$_inputChange(item, $event)"
                :style="'width:' + (item.width ? item.width + 'px' : '100%')"
              >
                <el-option v-for="(sub, idx) in item.options" :key="idx" :value="sub.value" :label="sub.label" :disabled="sub.disabled" />
              </el-select>
            </template>
            <template v-if="['date', 'week', 'month', 'year', 'dates'].includes(item.type)">
              <el-date-picker
                :value="value[item.key]"
                :type="item.type"
                :placeholder="item.placeholder"
                :format="item.format || undefined"
                :value-format="item.valueFormat || undefined"
                @input="$_inputChange(item, $event)"
                :disabled="item.disabled"
                style="width: 100%; height: 33px"
              />
            </template>
            <template v-if="item.type === 'daterange'">
              <el-date-picker
                :value="value[item.key]"
                :disabled="item.disabled"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :value-format="item.valueFormat || undefined"
                :default-time="item.defaultTime || ['00:00:00', '23:59:59']"
                @input="$_inputChange(item, $event)"
                style="width: 100%; height: 33px"
              />
            </template>
            <template v-if="item.type === 'datetime'">
              <el-date-picker
                :value="value[item.key]"
                type="datetime"
                :placeholder="item.placeholder"
                :value-format="item.valueFormat || ''"
                :disabled="item.disabled"
                @input="$_inputChange(item, $event)"
                style="width: 100%; height: 33px"
              />
            </template>
          </slot>
          <template #label>
            <slot :scope="item" :name="item.key + '-label'" />
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'AForm',
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
    row: {
      type: Number,
      default: 1
    },
    // col row
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    remoteMethod: Function,
    loading: Boolean
  },
  computed: {
    _options() {
      return this.options.filter((item) => !item.hidden)
    },
    rules() {
      let rules = {}
      this.options.forEach((item) => {
        if (item.rules) {
          item.rules.forEach((it) => {
            if (it.validator) {
              // 作用域 绑定
              it.validator = it.validator.bind(this)
            }
          })
          rules[item['key']] = item.rules
          delete item.rules
        }
      })
      return rules
    }
  },
  mounted() {
    this.$_setDefaultValue()
  },
  methods: {
    $_setDefaultValue() {
      this.options.forEach((item) => {
        item.value = this.value[item.key] = this.value[item.key] || item.value
      })
    },
    $_inputChange({ type, key }, event) {
      this.options.find((v) => v.key === key).value = event
      this.$emit('update:value', { ...this.value, [key]: event })
    },
    // a-form api
    validate(cb) {
      return this.$refs.form.validate(cb)
    },
    validateField(props, cb) {
      return this.$refs.form.validateField(props, cb)
    },
    resetFields() {
      return this.$refs.form.resetFields()
    },
    clearValidate(props, cb) {
      return this.$refs.form.clearValidate(props, cb)
    }
  },
  emits: ['update:value']
}
</script>

<style lang="scss" scoped>
.a-form {
  .flex {
    display: flex;
    .suffix {
      white-space: nowrap;
      padding-left: 10px;
    }
  }
}
</style>
