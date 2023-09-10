<template>
  <el-button :type="type" @click="downlFile">
    <i class="el-icon-download"></i>
    <slot
      ><span v-if="name">{{ name }}</span></slot
    >
  </el-button>
</template>
<script>
import { getDownfile } from '@/api'
export default {
  name: 'DownButton',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    isExtract: {
      type: [Boolean, Number],
      default: false
    }
  },
  methods: {
    async downlFile() {
      // if need extract code, comfirm first
      if (this.isExtract) {
        this.$prompt('请输入提取码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[a-zA-Z0-9]{6}$/,
          inputErrorMessage: '提取码为6位字母或数字'
        }).then(async ({ value }) => {
          this.doDownlFile({ id: this.id, extract_code: value })
        })
      } else {
        this.doDownlFile({ id: this.id })
      }
    },
    async doDownlFile({ id, extract_code }) {
      const res = await getDownfile({ id, extract_code })
      if (res.success) {
        // use iframe download
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = res.data.downloadUrl
        document.body.appendChild(iframe)
      } else {
        this.$message.error(res.msg)
      }
    }
  }
}
</script>
