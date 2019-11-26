<template>
  <div class="npm-packages-container">
    <el-alert v-if="isApiError" title="api数据接口异常" type="error" description="为了更好的给大家提供服务，请及时发送邮件 `adleytales@126.com` 通知UP主！" show-icon>
    </el-alert>

    <!-- title -->
    <h3 class="title">
      npm packages
    </h3>

    <!-- table -->
    <el-table :data="tableData" stripe border style="width: 100%" v-loading="loading">
      <el-table-column type="index" width="50" align="center">
      </el-table-column>
      <el-table-column prop="npm" label="npm" width="180" align="center">
      </el-table-column>
      <el-table-column prop="desc" label="描述" align="center">
      </el-table-column>
      <el-table-column label="源地址" align="center">
        <template slot-scope="scope">
          <a :href="scope.row.url">{{scope.row.url}}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Npm',

  data () {
    return {
      isApiError: false,

      loading: false,

      tableData: []
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      this.getNpmPackages()
    },

    // 获取npm packages包接口
    async getNpmPackages () {
      try {
        this.isApiError = false
        this.loading = true

        const result = await this.$axios.get(`https://adleytales.github.io/api/npm-packages/npm.json`)
        this.tableData = result
      } catch (e) {
        this.loading = false
        this.isApiError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.npm-packages-container {
  margin: 0 auto;
  max-width: 1280px;

  .title {
    padding: 15px 0;
    text-align: center;
  }
}
</style>
