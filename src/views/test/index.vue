/** Vue生命周期 */
<template>
  <div class="app-container">
    <el-scrollbar style="height: 100%" />
    {{ message }}
    <test-span>
      <template>
        aaa
      </template>
    </test-span>
  </div>
</template>

<script>
import testSpan from './test-span'
export default {
  name: 'Index',
  components: {
    testSpan
  },
  data() {
    return {
      message: 'Vue生命周期'
    }
  },
  beforeCreate() {
    console.clear()
    console.log('------beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // undefined
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  created() {
    console.log('------created创建完毕状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
  },
  beforeMount: function() {
    console.log('------beforeMount挂载前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + (this.$el)) // 已被初始化
    console.log('el', this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
  },
  mounted: function() {
    console.log('------mounted 挂载结束状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
    console.log('el', this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    this.$nextTick(_ => {
      console.log('nextTick')
      this.message = 'nextTick'
    })
    console.log('end')
  },
  beforeUpdate: function() {
    console.group('beforeUpdate 更新前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  updated: function() {
    console.group('updated 更新完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  beforeDestroy: function() {
    console.group('beforeDestroy 销毁前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  destroyed: function() {
    console.group('destroyed 销毁完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  methods: {
    $_private_update() {
      // ... 私有方法
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

