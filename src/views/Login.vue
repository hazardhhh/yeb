<template>
  <el-form :model="LoginForm" status-icon :rules="rules"
           v-loading="loading"
           element-loading-text="正在登录..."
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)"
           ref="LoginForm"
           label-width="60px"
           :hide-required-asterisk="true"
           class="LoginContainer">
    <h3 class="LoginTitle">云办公</h3>
    <el-form-item size="primary" label="用户名:" prop="username">
      <el-input size="primary" type="text" v-model="LoginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item size="primary" label="密码:" prop="password">
      <el-input size="primary" type="password" v-model="LoginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item size="primary" label="验证码:" prop="code">
      <el-input size="primary" type="text" v-model="LoginForm.code" placeholder="点击图片更换验证码"
                style="width: 200px"></el-input>
      <img :src="captchaUrl" @click="updateCaptcha">
    </el-form-item>
    <el-checkbox v-model="checked" class="LoginRemember">记住我</el-checkbox>
    <el-button size="primary" type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
  </el-form>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      captchaUrl: '/captcha?time=' + new Date(),
      LoginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      loading: false,
      checked: true,
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        code: [{required: true, message: '请输入验证码', trigger: 'blur'}],
      },
      timeShow:''
    }
  },
  methods: {
    updateCaptcha() {
      this.captchaUrl = '/captcha?time=' + this.timeShow;
      // this.captchaUrl = '/captcha?time=' + new Date();
    },
    submitLogin() {
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.postRequest('/login', this.LoginForm).then(resp => {
            this.loading = false;
            if (resp) {
              //存储用户token
              const tokenStr = resp.obj.tokenHead + resp.obj.token;
              window.sessionStorage.setItem('tokenStr', tokenStr);
              //跳转首页 replace不能回退 push可以回退
              // this.$router.replace('/home')
              //页面跳转
              let path = this.$route.query.redirect;
              this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
            }
          })
        } else {
          this.$message.error('请输入所有字段!');
          return false;
        }
      });
    }
  },
  created(){
    this.timeShow = new Date()
    console.log(this.timeShow)
  }
}
</script>

<style>
.LoginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.LoginTitle {
  margin: 0px auto 20px auto;
  text-align: center;
  font-size: 20px;
  color: blue;
}

.LoginRemember {
  text-align: left;
  margin: 0px 0px 20px 60px;
}

.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>