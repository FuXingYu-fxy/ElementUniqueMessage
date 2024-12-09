<template>
  <div class="playground">
    <el-button @click="handleShowOriginMessage">el-message</el-button>
    <el-button type="success" @click="handleShowUniqueMessage('success')">element-unique-message</el-button>
    <el-button type="info" @click="handleShowUniqueMessage('info')">element-unique-message</el-button>
    <el-button type="warning" @click="handleShowUniqueMessage('warning')">element-unique-message</el-button>
    <el-button type="danger" @click="handleShowUniqueMessage('error')">element-unique-message</el-button>
  </div>
</template>

<script>
import message from '../../lib/element-unique-message'

export default {
  name:'',
  data () {
    return {
    }
  },
  methods: {
    handleShowOriginMessage() {
      this.$message.error('原始的message, 重复点击会一直触发')
    },
    handleShowUniqueMessage(type) {
      message({
        type,
        message: '同一主题下的相同内容在持续期间只会显示一次'
      })
    },
  }
}
</script>

<style>
  .playground {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>