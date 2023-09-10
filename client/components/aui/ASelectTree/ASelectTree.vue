<script>
import { $children, plantRenderPara } from '../../../utils/gogocodeTransfer'
import * as Vue from 'vue'
import { resolveComponent } from 'vue'
import { ElSelectMixin, ElTreeMixin, propsPick, ElSelectMixinOptions, ElTreeMixinOptions, toArr, isValidArr, Obj, getParentKeys, cloneValue, isEqualsValue } from './_utils'

export default {
  name: 'ASelectTree',
  mixins: [ElSelectMixin, ElTreeMixin],
  render() {
    // const app = this.appContext
    const slots =
      [](this.$slots.prefix && this.$slots.prefix()) &&
      slots.push(Vue.h('template', plantRenderPara({ slot: 'prefix' }), this.$slots.prefix && this.$slots.prefix()))(this.$slots.empty && this.$slots.empty()) &&
      slots.push(Vue.h('template', plantRenderPara({ slot: 'empty' }), this.$slots.empty && this.$slots.empty()))
    return Vue.h(
      'el-select',
      plantRenderPara({
        ref: 'select',
        props: {
          ...this.propsElSelect,
          value: this.privateValue,
          popperClass: `el-select-tree__popper ${this.propsElSelect.popperClass || ''}`,
          filterMethod: this._filterMethod
        },
        on: {
          ...this.$listeners,
          change: (val) => {
            this.privateValue = val
          },
          'visible-change': this._visibleChange
        }
      }),
      [
        ...slots,
        Vue.h(
          'el-tree',
          plantRenderPara({
            ref: 'tree',
            props: {
              ...this.propsElTree,
              expandOnClickNode: !this.checkStrictly,
              filterNodeMethod: this._filterNodeMethod,
              nodeKey: this.propsMixin.value,
              defaultExpandedKeys: this._defaultExpandedKeys,
              renderContent: this._renderContent
            },
            on: {
              ...this.$listeners,
              'node-click': this._nodeClick,
              check: this._check
            }
          })
        )
      ]
    )
  },
  computed: {
    values: {
      get() {
        return toArr(this.value)
      }
    },
    propsElSelect() {
      return propsPick(this.$props, Object.keys(ElSelectMixinOptions.props))
    },
    propsElTree() {
      return {
        ...propsPick(this.$props, Object.keys(ElTreeMixinOptions.props)),
        props: this.propsMixin
      }
    },

    /**
     * 禁止直接引用，通过 getValByProp 获取节点值
     */
    propsMixin() {
      return {
        value: this.nodeKey || 'value',
        label: 'label',
        children: 'children',
        disabled: 'disabled',
        isLeaf: 'isLeaf',
        ...this.props
      }
    }
  },
  data() {
    return {
      privateValue: null,
      _defaultExpandedKeys: []
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        if (!isEqualsValue(val, this.privateValue)) {
          this.privateValue = cloneValue(val)
          this._updateDefaultExpandedKeys()
        }
      }
    },
    privateValue: {
      deep: true,
      immediate: true,
      handler(val) {
        // update when difference only
        if (!isEqualsValue(val, this.value)) {
          this.$emit('change', cloneValue(val))
        }

        if (this.showCheckbox) {
          this.$nextTick(() => {
            this.tree.setCheckedKeys(this.values)
          })
        }
      }
    },
    data: {
      deep: true,
      handler(val) {
        this._updateDefaultExpandedKeys()
      }
    },
    defaultExpandedKeys: {
      deep: true,
      immediate: true,

      handler(val) {
        this._updateDefaultExpandedKeys()
      }
    }
  },
  created() {},
  mounted() {
    this.select = this.$refs.select
    this.tree = this.$refs.tree
    // get ElTree/ElSelect all methods
    this.$nextTick(() => {
      ;['focus', 'blur'].forEach((item) => {
        this[item] = this.select[item]
      })
      ;[
        'filter',
        'updateKeyChildren',
        'getCheckedNodes',
        'setCheckedNodes',
        'getCheckedKeys',
        'setCheckedKeys',
        'setChecked',
        'getHalfCheckedNodes',
        'getHalfCheckedKeys',
        'getCurrentKey',
        'getCurrentNode',
        'setCurrentKey',
        'setCurrentNode',
        'getNode',
        'remove',
        'append',
        'insertBefore',
        'insertAfter'
      ].forEach((item) => {
        this[item] = this.tree[item]
      })
    })
  },
  methods: {
    /**
     * 获取节点的 prop 对应的值
     */
    getValByProp(prop, data) {
      const propVal = this.propsMixin[prop]
      if (propVal instanceof Function) {
        return propVal(data, this.tree?.getNode(this.getValByProp('value', data)))
      } else {
        return data[propVal]
      }
    },
    _filterMethod(query, item) {
      if (this.filterMethod) {
        return this.filterMethod(query, item)
      }
      return item.label.indexOf(query) > -1
    },
    _updateDefaultExpandedKeys() {
      const parentKeys = isValidArr(this.values) && isValidArr(this.data) ? getParentKeys(this.values, this.data, this.getValByProp) : []
      return (this._defaultExpandedKeys = this.defaultExpandedKeys ? this.defaultExpandedKeys.concat(parentKeys) : parentKeys)
    },
    _renderContent(h, { node, data, store }) {
      const ElSelectTreeOption = {
        extends: resolveComponent('ElOption'),
        methods: {
          // 拦截点击事件，事件移至 node 节点上
          selectOptionClick() {
            // $parent === slot-scope
            // $parent.$parent === el-tree-node
            this.$parent.$parent.handleClick()
          }
        }
      }
      return h(
        ElSelectTreeOption,
        {
          props: {
            value: this.getValByProp('value', data),
            label: this.getValByProp('label', data),
            disabled: this.getValByProp('disabled', data)
          }
        },
        this.renderContent
          ? [this.renderContent(h, { node, data, store })]
          : this.$slots.default && this.$slots.default()
          ? (this.$slots.default && this.$slots.default())({
              node,
              data,
              store
            })
          : undefined
      )
    },
    _filterMethod(val = '') {
      this.filterMethod?.(val)

      // fix: `tree` reference is empty when component destroy
      // https://github.com/yujinpan/el-select-tree/issues/35
      this.$nextTick(() => {
        this.tree && this.tree.filter(val)
      })
    },
    _filterNodeMethod(value, data, node) {
      // fix: https://github.com/yujinpan/el-select-tree/issues/35
      if (this.filterMethod) return this.filterMethod(value, data, node)
      if (!value) return true
      return this.getValByProp('label', data)?.includes(value)
    },

    // can not select
    _nodeClick(data, node, component) {
      this.$listeners['node-click']?.(...arguments)

      if (this.canSelect(node)) {
        if (!this.getValByProp('disabled', data)) {
          const elOptionSlot = $children(component).find((item) => item.$options._componentTag === 'node-content')
          const elOption = $children(elOptionSlot)[0]
          elOption.dispatch('ElSelect', 'handleOptionClick', [elOption, true])
        }
      } else {
        component.handleExpandIconClick()
      }
    },

    // clear filter text when visible change
    _visibleChange(val) {
      this.$listeners['visible-change']?.(...arguments)

      if (this.filterable && val) {
        this._filterMethod()
      }
    },
    // set selected when check change
    _check(data, params) {
      this.$listeners['check']?.(...arguments)

      let { checkedKeys, checkedNodes } = params

      // remove folder node when `checkStrictly` is false
      if (!this.checkStrictly) {
        checkedKeys = checkedNodes.filter((item) => !isValidArr(this.getValByProp('children', item))).map((item) => this.getValByProp('value', item))
      }

      this.privateValue = this.multiple ? [...checkedKeys] : checkedKeys.includes(this.getValByProp('value', data)) ? this.getValByProp('value', data) : undefined
    },
    canSelect(data) {
      return this.checkStrictly || this.getValByProp('isLeaf', data)
    }
  },
  emits: ['change', 'update:value']
}
</script>

<style lang="scss">
.el-select-tree {
  &__popper {
    // fix: checkbox 在展示下拉框时跳动问题
    .el-checkbox__input {
      display: flex;
    }

    .el-select-dropdown__item {
      flex: 1;
      padding: 0 30px 0 0;
      background: transparent !important;

      // fix: 节点展开时 popper 底部抖动问题
      // https://github.com/yujinpan/el-select-tree/pull/33
      height: 20px;
      line-height: 20px;

      &.selected:after {
        right: 10px;
      }
    }
  }
}
</style>
