<template>
  <div class="apartment">
    <div class="header">
      <Button type="primary" @click="handleAdd">新增</Button>
    </div>
    <div class="body">
      <Table border :columns="columns" :data="tableData" size="small"></Table>
    </div>
    <Modal
      v-model="showAddDialog"
      ref="addForm"
      title="新增账号"
      @on-ok="handleAddSubmit('addForm')">
      <div>
        <Form ref="formValidate" :model="addForm" :rules="addRuleValidate" :label-width="80">
          <FormItem label="Name" prop="username">
            <Input v-model="addForm.username" placeholder="Enter your name"></Input>
          </FormItem>
          <FormItem label="E-mail" prop="email">
            <Input v-model="addForm.email" placeholder="Enter your e-mail"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "Apartment",
    data() {
      return {
        videoUrl: '',
        showAddDialog: false,
        addForm: {
          username: '',
          email: '',
        },
        addRuleValidate: {
          username: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
        },
        columns: [
          {
            title: 'Username',
            key: 'username',
          },
          {
            title: 'Email',
            key: 'email'
          },
          {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.handleCopyCaption(params.index)
                    }
                  }
                }, 'Copy'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.handleDownload(params.index)
                    }
                  }
                }, 'Download')
              ]);
            }
          }
        ],
        tableData: [],
      }
    },
    methods: {
      handleAdd() {
        this.showAddDialog = true
      },
      handleAddSubmit(name) {
        console.log('handleSubmit')
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
