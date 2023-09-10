import './index.scss'
import popup from '../_util/popup'

export default {
  name: 'ADialog',
  mixins: [popup],
  render() {
    const renderFooter = () => {
      return (
        <div class="dialog-footer">
          <el-button type="default" onClick={this.onClose}>{this.cancelButtonText}</el-button>
          <el-button type="primary" loading={this.$attrs.loading} onClick={this.onConfirm}>
            {this.confirmButtonText}
          </el-button>
        </div>
      )
    }

    return (
      <el-dialog
        {...{ props: this.$attrs, on: this.$listeners }}
        custom-class={'a-dialog'}
        visible={this.value}
        onClose={this.onClose}
      >
        <template slot="title">
          {this.$slots.header}
        </template>
        {this.$slots.default}
        <div slot="footer">
          {this.$slots.footer ? this.$slots.footer : this.autoFooter ? renderFooter() : ''}
        </div>
      </el-dialog>
    )
  }
}
