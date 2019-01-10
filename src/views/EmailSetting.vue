<template>
  <div class="email-setting">
    <Form ref="form" :model="form" :rules="rules" :label-width="80">
      <FormItem prop="email" label="Sender">
        <Input type="text" v-model="form.email" placeholder="Sender">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="Text">
        <Input v-model="form.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="ToEmail">
        <Input type="text" v-model="form.to" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('form')">更新&测试</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "EmailSetting",
    data() {
      return {
        form: {
          email: '',
          password: '',
          content: ''
        },
        rules: {
          user: [
            { required: true, message: 'Please fill in the email', trigger: 'blur' },
            {type: 'email'}
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
