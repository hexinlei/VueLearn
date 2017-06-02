<template>
  <div>
  <el-row :gutter="10">
      <h2>token:{{token}}</h2>
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
  import {getPageInfo} from '../service/httpService'
  import { mapState } from 'vuex'
  export default {
    name: 'homePage',
    mounted: function () {
      getPageInfo()
          .then((response) => {
            this.menus = response.data.catalogs
          })
    },
    data () {
      return {
        message: '页面加载于 ' + new Date(),
        menus: {},
        breadcrumbs: []
      }
    },
    computed: mapState(
      { token: state => state.user.token }
    )
  }
</script>

<style>
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
