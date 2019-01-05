<template>
  <div class="home">
    <div class="header">
      <Row :gutter="4">
        <Col span="6">
          <Input v-model="videoUrl" placeholder="Youtube url..."/>
        </Col>
        <Col span="4">
          <Button type="primary" @click="handleAdd">Add</Button>
        </Col>
      </Row>
    </div>
    <div class="body">
      <Table border :columns="columns" :data="tableData" size="small"></Table>
    </div>
  </div>
</template>

<script>
  import { verifyUrl, clampText } from '@/utils/functions'
  import { get, post } from '@/utils/request'

  export default {
    name: 'home',
    data() {
      return {
        videoUrl: '',
        columns: [
          {
            title: 'Title',
            key: 'title',
          },
          {
            title: 'State',
            width: 100,
            key: 'state'
          },
          {
            title: 'Caption',
            key: 'caption',
            render: (h, params) => {
              return h('textarea', {
                attrs: {
                  rows: 3,
                  cols: 50,
                }
              },  params.row.caption)
            }
          },
          {
            title: 'Url',
            key: 'url'
          },
          {
            title: 'Action',
            key: 'action',
            width: 200,
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
    mounted() {
      this.fetchTableData()
    },
    methods: {
      fetchTableData() {
        get('/audios')
          .then(resp => {
            this.tableData = resp.data
          })
      },
      createAudio(payload) {
        post('/audios', payload)
        .then(res => {
          this.$Message.success('Created')
          this.fetchTableData()
        })
      },
      handleAdd(e) {
        const paylod = {'url': this.videoUrl}
        this.createAudio(paylod)
      },
      handleCopyCaption(index) {
      },
      handleDownload(index) {
        window.open(`http://localhost:3000/download/${this.tableData[index]._id}`, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .header {
      padding-bottom: 5px;
    }
  }
</style>
