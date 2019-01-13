<template>
  <div class="email-setting">
    <Card>
      <p slot="title">邮件设置</p>
      <Form ref="emailForm" :model="emailForm" :rules="rules" :label-width="100">
        <FormItem prop="stmp_server" label="Stmp Server">
          <Input type="text" v-model="emailForm.stmp_server" placeholder="Stmp Server">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="stmp_port" label="Stmp Port">
          <Input type="text" v-model="emailForm.stmp_port" placeholder="Stmp Port">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="email" label="Sender Email">
          <Input type="text" v-model="emailForm.email" placeholder="Sender">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" label="Password">
          <Input type="password" v-model="emailForm.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">更新</Button>
        </FormItem>
      </Form>
    </Card>
    <Card style="margin-top: 20px">
      <p slot="title">邮件测试</p>
      <Form ref="testForm" :model="testForm" :label-width="100">
        <FormItem label="Subject">
          <Input v-model="testForm.subject" type="text" placeholder="Enter subject..."></Input>
        </FormItem>
        <FormItem label="Content">
          <Input v-model="testForm.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter content..."></Input>
        </FormItem>
        <FormItem label="Receiver Email">
          <Input type="text" v-model="testForm.to_addr"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleTest">测试</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  import { get, post } from '@/utils/request'

  export default {
    name: "EmailSetting",
    data() {
      return {
        emailForm: {
          stmp_server: '',
          stmp_port: '',
          email: '',
          password: '',
        },
        rules: {
          stmp_server: [
            {required: true, trigger: 'blur'},
          ],
          stmp_port: [
            {required: true, trigger: 'blur', type: 'number'}
          ],
          email: [
            {required: true, trigger: 'blur', type: 'email'},
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', message: 'The password cannot be none', trigger: 'blur'}
          ]
        },
        testForm: {
          subject: 'Test email subject from cubiclab',
          content: 'Test email content',
          to_addr: ''
        },
      }
    },
    mounted() {
      this.fetchEmailSetting()
    },
    methods: {
      handleSubmit() {
        this.$refs['emailForm'].validate((valid => {
          if (valid) {
            console.log(this.emailForm)
          }
        }))
      },
      handleTest() {
       if (!Boolean(this.testForm.to_addr)) {
         this.$Message.warning("Receiver email can't be none")
       } else {
         this.testMail()
       }
      },
      fetchEmailSetting() {
        get('/settings/email')
          .then(r => {
            console.log(r)
            this.emailForm = r.data
          })
      },
      testMail() {
        post('/settings/email-test', this.testForm)
          .then(r => {
            console.log(r)
            this.$Message.success('Sent already')
          })
      }
    }
  }
</script>

<style scoped>

</style>
