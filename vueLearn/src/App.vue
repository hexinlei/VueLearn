<template>
  <div id="app">
  <el-row :gutter="10">
      <h1>header</h1>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="6" :sm="8" :md="8" :lg="8">
        <div class="grid-content bg-purple">
          <aMenu :menus="menus" :breadcrumbs="breadcrumbs"></aMenu>
        </div>
      </el-col>
      <el-col :xs="18" :sm="16" :md="16" :lg="16">
        <div class="grid-content bg-purple">
          <el-breadcrumb separator="/" class="breadcrumb" >
            <el-breadcrumbItem v-for="item in breadcrumbs">{{item.name}}</el-breadcrumbItem>
          </el-breadcrumb>
          <div class="grid-content bg-purple-dark context">
            <router-view></router-view>
          </div>
        </div>
      </el-col>
    </el-row>
    
  </div>

</template>

<script>
  var datas = [{
    'name': '商品管理',
    'index': '/home'
  }, {
    'name': '订单管理',
    'index': '/2',
    'children': [{'name': 'B2C订单', 'index': '/2-1/', 'children': [{'name': 'B2C订单解锁', 'index': '/2-1-1/', 'parent': {'name': 'B2C订单', 'index': '/2-1/', 'parent': {'name': '订单管理', 'index': '/2'}}}, {'name': 'B2C订单列表', 'index': '/orderList', 'parent': {'name': 'B2C订单', 'index': '/2-1/', 'parent': {'name': '订单管理', 'index': '/2'}}}]}]
  }, {
    'name': '报价单管理',
    'index': '/3'
  }]
  export default {
    name: 'app',
    data () {
      return {
        message: '页面加载于 ' + new Date(),
        menus: datas,
        breadcrumbs: []
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple-dark {
    background: #99a9bf;
  }
  
  .bg-purple {
    background: #d3dce6;
  }
  
  .bg-purple-light {
    background: #e5e9f2;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  
  .breadcrumb {
    padding-top: 14px;
    padding-left: 30px;
  }
  
  .context {
    margin-top: 30px;
  }
</style>
