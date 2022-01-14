<template>
  <div>
    <el-form ref="form" :model="LoginForm" class="LoginContainer">
      <h3 class="LoginTitle">系统登录</h3>
      <el-from-item>
          <el-input type="text" auto-complete="false" v-model="LoginForm.username" placeholder="请输入用户名"></el-input>
      </el-from-item>
      <el-from-item>
          <el-input type="password" auto-complete="false" v-model="LoginForm.password" placeholder="请输入
          密码" style="margin-top: 20px"></el-input>
      </el-from-item>
      <el-from-item>
          <div>
            <el-input type="text" auto-complete="false" v-model="LoginForm.code" placeholder="点击图片
                  更换验证码" style="width: 250px;margin-right: 5px;margin-top: 20px"></el-input>
            <img :src="captchaUrl">
          </div>
      </el-from-item>
      <el-checkbox v-model="checked" class="LoginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: '',
      LoginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      checked:true
    }
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
  }
  .LoginRemember {
    text-align: left;
    margin: 10px 0px 15px 0px;
  }
</style>