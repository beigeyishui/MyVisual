/** 干员档案表 */
<template>
  <div ref="base" class="base-container">
    <div style="height:100%; background: #fff;">
      <el-table
        v-loading="listLoading"
        :data="tableData"
        border
        :height="tableHeight"
        style="width: 100%;"
      >
        <el-table-column label="#" type="index" width="50" align="center" />
        <el-table-column label="头像" width="200" align="center">
          <template slot-scope="scope">
            <div>
              <el-avatar shape="square" :size="100" fir="fill" :src="url + scope.row.icon" />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="名称" width="200" align="center">
          <template slot-scope="scope">
            <el-link type="primary">{{ scope.row.name }}</el-link>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini">超小按钮{{ scope.row.id }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="query.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
// import json from './components/data.json'
import { agentArchivesList } from '@/api/table'
export default {
  name: 'Index',
  data() {
    return {
      baseWidth: null,
      baseHeight: null,

      listLoading: true,
      tableData: null,
      url: process.env.VUE_APP_TABLE_API + '/image/',

      total: 0,
      query: {
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    tableHeight() {
      return this.baseHeight - 70
      // console.log(this.$refs.base)
      // return 200 // this.$refs.base.clientHeight
    }
  },
  created() {
    this.search()
  },
  mounted() {
    // console.log(document.querySelector('.app-main').clientWidth)
    // console.log(document.querySelector('.app-main').clientHeight)
    this.baseWidth = this.$refs.base.clientWidth
    this.baseHeight = this.$refs.base.clientHeight

    this.init()
  },
  methods: {
    init() {

    },
    search() {
      agentArchivesList(this.query).then(response => {
        this.tableData = response.data.items
        this.total = response.data.total
        this.listLoading = false
      }).catch(_ => {
        this.listLoading = false
        console.error(_)
      })
    },
    handleSizeChange(val) {
      this.query.pageSize = val
      this.search()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.query.pageNo = val
      this.search()
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
.base-container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 84px);
  background: #F3F3F3;
}
</style>

