<template>
  <div>
    <router-link slot="left" to="/">返回</router-link>
    <form class="login" v-on:submit.prevent="submit">
      <div class="line">	
        <div v-show="btn && !form.username">username不能为空</div>
        <input type="text" placeholder="输入你的uid" v-model="form.username">
      </div>
      <div class="line">
        <div v-show="btn && !form.password">密码不能为空</div>
        <input type="text" placeholder="输入你的用户名" v-model="form.password">
      </div>
      <button>登录</button>
      <span>{{msg}}</span>
    </form>
  </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN, USER_SIGNOUT } from '../store/user'
    import { userLogin } from '../service/httpService'
    export default {
      data () {
        return {
          btn: false, //  true 已经提交过， false没有提交过
          form: {
            'username': '',
            'password': ''
          },
          msg: ''
        }
      },
      methods: {
        ...mapActions([USER_SIGNIN, USER_SIGNOUT]),
        submit () {
          // this.USER_SIGNOUT()
          this.btn = true
          userLogin(this.form).then((response) => {
            if (response) {
              if (response.status !== 200) {
                this.msg = '登录失败'
              } else {
                this.USER_SIGNIN(response)
                this.$router.replace({ path: '/homePage' })
              }
            }
          })
        }
      }
    }
</script>

<style>
  .login {
    padding: 50px;
    text-align: center;
    .line {
      padding: 5px;
      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    button {
      padding: 0 20px;
      margin-top: 20px;
      line-height: 28px;
    }
  }
</style>
