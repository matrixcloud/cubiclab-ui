<template>
  <div class="login">
    <div class="logo">
      <img src="" alt="">
    </div>
    <h2 class="title">Welcome to Cubiclab</h2>
    <div class="form">
      <Form ref="loginForm" :model="form" :label-width="80">
        <FormItem label="Username" prop="username">
          <Input type="text" v-model="form.username"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="form.password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login('loginForm')">Login</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import { post } from '@/utils/request'

  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      login(form) {
        post('/login', this.form)
          .then(r => {
            localStorage.setItem('X-Auth-Token', r.data.token)
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    .logo {

    }

    .title {
      text-align: center;
    }

    .form {

    }
  }
</style>
