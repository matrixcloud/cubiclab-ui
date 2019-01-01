<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header'

  export default {
    components: {
      Header
    }
  }
</script>
<style lang="scss">
  #app {
    padding: 10px 50px;
  }

  #content {
    padding-top: 30px;
  }
</style>
