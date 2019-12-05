<template>
  <div class="npm-packages-container">
    <!-- 异常的提示信息 -->
    <el-alert v-if="isApiError" title="api数据接口异常" type="error" description="为了更好的给大家提供服务，请及时发送邮件 `adleytales@126.com` 通知UP主！" show-icon>
    </el-alert>

    <!-- title -->
    <h3 class="title">npm packages</h3>

    <!-- tabs -->
    <div class="tabs-wrapper">
      <el-radio-group v-model="type" size="small">
        <el-radio-button label="frontend">前端</el-radio-button>
        <el-radio-button label="backend">Nodejs后端</el-radio-button>
      </el-radio-group>
    </div>

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

      type: 'frontend',

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

        const { data } = await this.$axios.get(`https://adleytales.github.io/api/npm-packages/${this.type}.json`)
        this.tableData = data
        this.loading = false
      } catch (e) {
        this.loading = false
        this.isApiError = true
      }
    }
  },

  watch: {
    type () {
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.npm-packages-container {
  margin: 0 auto;
  max-width: 1280px;

  .title {
    padding: 15px 0 0 0;
    text-align: center;
    margin: 0;
  }

  .tabs-wrapper {
    text-align: center;
    padding: 15px 0;
  }
}
</style>
