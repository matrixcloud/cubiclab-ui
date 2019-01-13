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
      title="新增账号"
      @on-ok="handleAddSubmit">
      <div>
        <Form ref="addForm" :model="addForm" :rules="addRuleValidate" :label-width="80">
          <FormItem label="Name" prop="username">
            <Input v-model="addForm.username" placeholder="Enter your name"></Input>
          </FormItem>
          <FormItem label="E-mail" prop="email">
            <Input v-model="addForm.email" placeholder="Enter your e-mail"></Input>
          </FormItem>
          <FormItem label="Password" prop="password">
            <Input type="password" v-model="addForm.password"></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
  import { get, post, del } from '@/utils/request'

  export default {
    name: "Apartment",
    data() {
      return {
        videoUrl: '',
        showAddDialog: false,
        addForm: {
          username: '',
          email: '',
          password: '',
        },
        addRuleValidate: {
          username: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
            {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
          ],
          password: [
            {required: true, trigger: 'blur'}
          ]
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
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.handleDelete(params.index)
                    }
                  }
                }, 'Delete')
              ]);
            }
          }
        ],
        tableData: [],
      }
    },
    mounted() {
      this.fetchUsers()
    },
    methods: {
      handleAdd() {
        this.showAddDialog = true
      },
      handleDelete(index) {
        const _id = this.tableData[index]._id
        if (_id) {
          this.deleteUsers(_id)
        }
      },
      handleAddSubmit() {
        this.$refs['addForm'].validate((valid => {
          if (valid) {
            this.createUsers()
          }
        }))
      },
      fetchUsers() {
        get('/zj-users')
          .then(r => {
            this.tableData = r.data
          })
      },
      createUsers() {
        post('/zj-users', this.addForm)
          .then(r => {
            this.$Message.success('Created')
            this.fetchUsers()
          })
      },
      deleteUsers(_id) {
        del('/zj-users/' + _id)
          .then(r => {
            this.fetchUsers()
          })
      }
    }
  }
</script>

<style scoped>

</style>
