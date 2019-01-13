<template>
  <div class="storage-setting">
    <Card>
      <p slot="title">存储设置</p>
      <Tabs>
        <TabPane label="七牛云">
          <Form ref="form" :model="form" :rules="rules" :label-width="100">
            <FormItem label="Access Key">
              <Input v-model="form.access_key"></Input>
            </FormItem>
            <FormItem label="Access Secret">
              <Input v-model="form.access_secret"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSave">保存</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="阿里云">阿里云</TabPane>
        <TabPane label="其他云">其他云233...</TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "EmailSetting",
    data() {
      return {
        form: {
          access_key: '',
          access_secret: ''
        },
        rules: {
          access_key: [
            {required: true, trigger: 'blur'},
          ],
          access_secret: [
            {required: true, trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      handleSave() {

      }
    }
  }
</script>

<style scoped>

</style>
