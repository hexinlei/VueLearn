<template>
  <div class="block">
<el-table
    :data="tableData"
    border
    style="width: 100%"
    @row-click="rowClick"
    >
    <el-tableColumn
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-tableColumn>
    <el-tableColumn
      prop="name"
      label="姓名"
      width="120">
    </el-tableColumn>
    <el-tableColumn
      prop="province"
      label="省份"
      width="120">
    </el-tableColumn>
    <el-tableColumn
      prop="city"
      label="市区"
      width="120">
    </el-tableColumn>
    <el-tableColumn
      prop="address"
      label="地址"
      width="300">
    </el-tableColumn>
    <el-tableColumn
      prop="zip"
      label="邮编"
      width="120">
    </el-tableColumn>
    <el-tableColumn
      fixed="right"
      label="操作"
      class-name="operation"
      width="100">
      <template scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-tableColumn>
  </el-table>

    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>

</template>

<script>
  export default {
    name: 'orderList',
    methods: {
      handleClick () {
        console.log(1)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      rowClick (row, event, column) {
        var columnName = column.className
        if (!columnName) {
          console.log(row.date)
        }
      }
    },

    data () {
      return {
        currentPage4: 1,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
