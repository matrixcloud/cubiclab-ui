<template>
  <div id="app">
    <Header v-if="needShowHeadAndFooter"></Header>
    <div id="content">
      <router-view/>
    </div>
    <CFooter></CFooter>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import CFooter from '@/components/CFooter'
  const hiddenPaths = ["/login"]

  export default {
    components: {
      Header,
      CFooter
    },
    data() {
      return {
        needShowHeadAndFooter: true
      }
    },
    mounted() {
      const currentPath = this.$router.currentRoute.path;
      this.tryToHideHeadAndFoot(currentPath);
    },
    watch: {
      $route(to, from) {
        this.tryToHideHeadAndFoot(to.path);
      }
    },
    methods: {
      tryToHideHeadAndFoot(path) {
        if (hiddenPaths.indexOf(path) !== -1) {
          this.needShowHeadAndFooter = false;
        } else {
          this.needShowHeadAndFooter = true;
        }
      }
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
