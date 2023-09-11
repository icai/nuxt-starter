<template>
  <div class="page-login">
    <div class="user-login-bg"></div>
    <div class="page-login--layer">
      <div class="page-login--content">
        <div class="page-login--content-main content-wrapper">
          <img src="@/assets/images/login/login-side.png" class="slogan" alt="" srcset="" />
          <div class="page-login--formwrap">
            <h1 class="title">NeonCMS</h1>
            <div class="page-login--form form-container">
              <el-form ref="ruleFormRef" label-position="top" :rules="rules" :model="model" @submit.prevent="onSubmit(ruleFormRef)" size="large">
                <el-form-item prop="email">
                  <el-input type="text" v-model="model.email" placeholder="Account">
                    <template #prepend>
                      <n-icon icon="user" style="font-size: 20px"></n-icon>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="model.password" placeholder="Password">
                    <template #prepend>
                      <n-icon icon="lock" style="font-size: 20px"></n-icon>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="verify">
                  <el-input type="text" v-model="model.verify" @keyup.enter="onSubmit(ruleFormRef)" placeholder="Verify Code">
                    <template #append>
                      <img id="yzm" :src="vcode" @click="vertifyCode" />
                    </template>
                  </el-input>
                </el-form-item>
                <el-button @click="onSubmit(ruleFormRef)" size="large" type="primary" class="button-login"> Login </el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hex_md5 } from '@/utils/md5'
import { useStore } from '~/stores/main'
export default {
  name: 'adminLogin',
  setup() {
    useHead({
      title: 'Login'
    })
    const store = useStore()
    const vcode = ref('/api/verify')
    // Define the model and its properties
    const model = reactive({
      email: '',
      password: '',
      isRemember: false,
      verify: ''
    })

    const ruleFormRef = ref()

    // Define the validation rules
    const rules = reactive({
      email: [
        {
          required: true,
          message: 'Please input username',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ],
      verify: [
        {
          required: true,
          message: 'Please input code',
          trigger: 'blur'
        }
      ]
    })

    // Define methods
    const vertifyCode = () => {
      const url = '/api/verify?t=' + Math.random()
      vcode.value = url
    }

    const onSubmit = async (formEl) => {
      try {
        if (!formEl) return
        await formEl.validate(async (valid, fields) => {
          if (valid) {
            const { email, password, isRemember, verify } = model
            // validate
            if (!email) {
              return $notify({
                title: 'Notify',
                message: 'Please enter your email',
                type: 'warning'
              })
            }
            // verify code length
            if (verify.length !== 4) {
              return $notify({
                title: 'Notify',
                message: 'Verify code length is 4',
                type: 'warning'
              })
            }

            await store
              .login({
                email,
                username: email,
                password: hex_md5(password.trim()),
                isRemember,
                verify
              })
              .then((res) => {
                return store.redirect('admin', true)
              })
              .catch((err) => {
                vertifyCode()
                $notify({
                  title: 'Notify',
                  message: err.message,
                  type: 'warning'
                })
              })
          } else {
            console.log('error submit!', fields)
          }
        })
      } catch (error) {
        $notify({
          message: error.message,
          type: 'warning'
        })
      }
    }

    return {
      vcode,
      model,
      rules,
      vertifyCode,
      ruleFormRef,
      onSubmit
    }
  }
}
</script>
<style lang="scss">
// 主色
$color-primary: #409eff;

// 辅助色
$color-info: #909399;
$color-success: #67c23a;
$color-warning: #e6a23c;
$color-danger: #f56c6c;

// 文字
$color-text-main: #303133;
$color-text-normal: #606266;
$color-text-sub: #909399;
$color-text-placehoder: #c0c4cc;

// 边框
$color-border-1: #dcdfe6;
$color-border-2: #e4e7ed;
$color-border-3: #ebeef5;
$color-border-4: #f2f6fc;

// 背景
$color-bg: #f8f8f9;

%unable-select {
  user-select: none;
  cursor: pointer;
}
%full {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

%flex-center-col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.page-login {
  @extend %unable-select;
  $backgroundColor: #f0f2f5;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  position: relative;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
  margin: 0px;
  padding: 0px;
  width: 100%;

  .user-login-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
  }

  .content-wrapper {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 560px;
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    justify-content: space-between;

    .slogan {
      width: 370px;
      height: 424px;
      text-align: center;
      color: #fff;
      font-size: 36px;
      letter-spacing: 2px;
      line-height: 48px;
      padding-left: 37px;
    }

    .logo {
      width: 322px;
      height: 86px;
    }
  }
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间
  .page-login--layer-time {
    font-size: 24em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  // 登陆页面控件的容器
  .page-login--content {
    height: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  // header
  .page-login--content-header {
    padding: 1em 0;
    .page-login--content-header-motto {
      margin: 0px;
      padding: 0px;
      color: $color-text-normal;
      text-align: center;
      font-size: 12px;
    }
  }
  // main
  .page-login--logo {
    width: 240px;
    margin-bottom: 2em;
    margin-top: -2em;
  }
  .page-login--formwrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 132px;
    width: 322px;
    align-items: center;
  }
  // 登录表单
  .page-login--form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    // padding: 30px 40px;
    background-color: #fff;
    width: 300px;
    margin-top: 30px;
    // 卡片
    .el-card {
      margin-bottom: 15px;
    }
    .button-login {
      width: 100%;
    }

    .el-input-group--prepend > .el-input__wrapper {
      border-radius: 4px;
      padding-left: 50px;
    }
    .el-input-group__prepend {
      padding: 0px 14px;
      background: transparent;
      border: none;
      position: absolute;
      z-index: 1;
      box-shadow: none;
    }

    .login-code {
      height: 40px - 3px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      img {
        height: 100%;
      }
    }
    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // 快速选择用户面板
  .page-login--quick-user {
    @extend %flex-center-col;
    padding: 10px 0px;
    border-radius: 4px;
    &:hover {
      background-color: $color-bg;
      i {
        color: $color-text-normal;
      }
      span {
        color: $color-text-normal;
      }
    }
    i {
      font-size: 36px;
      color: $color-text-sub;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
      color: $color-text-sub;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1em 0;
    .page-login--content-footer-locales {
      padding: 0px;
      margin: 0px;
      margin-bottom: 15px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
        margin: 0 0.5em;
        &:hover {
          color: $color-text-main;
        }
      }
    }
    .page-login--content-footer-copyright {
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
      }
    }
    .page-login--content-footer-options {
      padding: 0px;
      margin: 0px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      a {
        color: $color-text-normal;
        margin: 0 1em;
      }
    }
  }
  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #fff;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>
