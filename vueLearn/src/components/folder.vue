<template>
  <el-menu :default-active="'1'" @open="handleOpen" @close="handleClose" @select="handlerSelect" :router=true :unique-opened=true>
    <div v-for="f in folder">
      <el-submenu :index="f.index" v-if="f.children">
        <template slot="title"><i class="el-icon-message"></i>{{f.name}}</template>
                <aFolderContents :children="f.children" :breadcrumbs="breadcrumbs"></aFolderContents>
            </el-submenu>
            <el-menuItem :index="f.index" v-else :router="f.index" v-bind:items="f" v-on:click="say(f)"><i class="el-icon-menu"></i>{{f.name}}</el-menuItem>
        </div>
    </el-menu>

</template>

<script>

  export default {
    name: 'folder',
    props: ['folder', 'breadcrumbs'],
    data: function () {
      return {
        items: ''
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handlerSelect (key, keyPath) {
        console.log(key)
        // console.log(this.$emit)
        // console.log(this.folder)
        // console.log(items)
        // var breadcrumbs = this.breadcrumbs
        // //  var folders = this.folder
        // if (breadcrumbs) {
        //   breadcrumbs.splice(0, breadcrumbs.length)
        //   Object.keys(keyPath).forEach((key) => {
        //     breadcrumbs.push({'name': keyPath[key]})
        //   })
        // }
      },
      say (f) {
        var breadcrumbs = this.breadcrumbs
        breadcrumbs.splice(0, breadcrumbs.length)
        this.breadcrumbName(f, breadcrumbs)
      },
      breadcrumbName (item, breadcrumbs) {
        var parent = item.parent
        if (parent) {
          this.breadcrumbName(parent, breadcrumbs)
        } else {
          breadcrumbs.push({'name': item.name})
        }
      }
    }
  }
</script>
