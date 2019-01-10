<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <MenuItem name="1" to="/">
      <Icon type="ios-paper" />
      内容管理
    </MenuItem>
    <Submenu name="schedule">
      <template slot="title">
        <Icon type="ios-stats" />
        调度管理
      </template>
      <MenuGroup title="爬虫">
        <MenuItem name="3-1" to="apartment">张江人才公寓</MenuItem>
        <MenuItem name="3-2">新闻</MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="setting">
      <template slot="title">
        <Icon type="ios-stats" />
        综合设置
      </template>
      <MenuGroup title="通用">
        <MenuItem name="3-1" to="email-setting">发件邮箱</MenuItem>
        <MenuItem name="3-2">授权管理</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
