<template>
  <div>
    <div v-for="child in children">
      <el-submenu :index="child.index" v-if="child.children">
        <template slot="title"><i class="el-icon-message"></i>{{child.name}}
</template>
                <aFolderContents :children="child.children" :breadcrumbs="breadcrumbs"></aFolderContents>             
            </el-submenu>             
            <el-menuItem :index="child.index" v-else :router="child.index" v-on:click="say(child)">                 
                <i class="el-icon-setting"></i>{{child.name}}             
            </el-menuItem>         
        </div>     
    </div> 
</template>

<script>
  export default {
    name: 'folderContents',
    props: ['children', 'breadcrumbs'],
    methods: {
      say (f) {
        var breadcrumbs = this.breadcrumbs
        if (breadcrumbs) {
          breadcrumbs.splice(0, breadcrumbs.length)
        }
        this.breadcrumbName(f, breadcrumbs)
        breadcrumbs.push({'name': f.name})
      },
      breadcrumbName (item, breadcrumbs) {
        var parent = item.parent
        if (parent) {
          // breadcrumbs.push({'name': parent.name})
          this.breadcrumbName(parent, breadcrumbs)
          breadcrumbs.push({'name': parent.name})
        } else {
          // breadcrumbs.push({'name': item.name})
        }
      }
    }
  }
</script>
