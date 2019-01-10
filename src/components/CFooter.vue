<template>
  <Footer>
    Created by atom, current time is {{now}}
  </Footer>
</template>

<script>
  export default {
    name: "CFooter",
    computed: {
      now() {
        return new Date()
      }
    }
  }
</script>

<style scoped>

</style>
