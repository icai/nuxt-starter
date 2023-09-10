import './index.scss'
import popup from '../_util/popup'

export default {
  name: 'ADrawer',
  mixins: [popup],
  render() {
    const renderFooter = () => {
      return (
        <div>
          <el-button
            type="primary"
            loading={this.$attrs.loading}
            onClick={this.onConfirm}
          >
            {this.confirmButtonText}
          </el-button>
          <el-button type="default" onClick={this.onClose}>
            {this.cancelButtonText}
          </el-button>
        </div>
      )
    }

    return (
      <el-drawer
        {...{ props: this.$attrs, on: this.$listeners }}
        custom-class={'a-drawer'}
        visible={this.value}
        onClose={this.onClose}
      >
        <template slot="title">{this.$slots.header}</template>
        <div class="a-drawer__content">
          <div class="a-drawer__body">{this.$slots.default}</div>
          <div class="a-drawer__footer">
            {this.$slots.footer
              ? this.$slots.footer
              : this.autoFooter
              ? renderFooter()
              : ''}
          </div>
        </div>
      </el-drawer>
    )
  },
}
