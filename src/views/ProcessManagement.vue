<template>
  <Table border :columns="columns" :data="tableData">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="start(index)">Start</Button>
      <Button type="error" size="small" @click="stop(index)">Stop</Button>
    </template>
  </Table>
</template>

<script>
  import { get } from '@/utils/request'

  export default {
    data() {
      return {
        columns: [
          {
            title: 'Name',
            slot: 'name'
          },
          {
            title: 'Status',
            key: 'statename'
          },
          {
            title: 'Description',
            key: 'description'
          },
          {
            title: 'Action',
            slot: 'action',
            width: 240,
            align: 'center'
          }
        ],
        tableData: []
      }
    },
    mounted() {
      this.fetchAllSate()
    },
    methods: {
      fetchAllSate() {
        get('/process/all-info')
          .then(r => {
            this.tableData = r.data
        })
      },
      start(index) {
        get('/process/start-one/' + this.tableData[index].name)
          .then(r => {
            this.fetchAllSate()
          })
      },
      stop(index) {
        get('/process/stop-one/' + this.tableData[index].name)
          .then(r => {
            this.fetchAllSate()
          })
      }
    }
  }
</script>

<style scoped>

</style>
