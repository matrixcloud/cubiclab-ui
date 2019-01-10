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
        <MenuItem name="apartment" to="apartment">张江人才公寓</MenuItem>
        <MenuItem name="news">新闻</MenuItem>
      </MenuGroup>
      <MenuGroup title="签到">
        <MenuItem name="jd" to="jd">京东豆</MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="setting">
      <template slot="title">
        <Icon type="ios-stats" />
        综合设置
      </template>
      <MenuGroup title="通用">
        <MenuItem name="email-setting" to="email-setting">邮箱设置</MenuItem>
        <MenuItem name="storage-setting" to="storage-setting">存储设置</MenuItem>
        <MenuItem name="token-setting" to="token-setting">Token设置</MenuItem>
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
