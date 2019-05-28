<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <Submenu name="inf">
      <template slot="title">
        <Icon type="ios-stats" />
        基础设施
      </template>
      <MenuGroup title="设施">
        <MenuItem name="process-management" to="/process-management">
          进程管理
        </MenuItem>
        <MenuItem name="ip-pool" to="/ip-pool">
          IP 代理池
        </MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="content-management">
      <template slot="title">
        <Icon type="ios-stats" />
        内容管理
      </template>
      <MenuGroup title="媒体">
        <MenuItem name="audio" to="/">
          <Icon type="ios-paper" />
          音频管理
        </MenuItem>
        <MenuItem name="news" to="news">
          <Icon type="ios-paper" />
          资讯管理
        </MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="schedule">
      <template slot="title">
        <Icon type="ios-stats" />
        调度管理
      </template>
      <MenuGroup title="爬虫">
        <MenuItem name="overview">爬虫概览</MenuItem>
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
      <MenuGroup title="API">
        <MenuItem name="api-key" to="api-key">Api Key</MenuItem>
        <MenuItem name="api-call" to="api-call">Api 调用频次</MenuItem>
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
