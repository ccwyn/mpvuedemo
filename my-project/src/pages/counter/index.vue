<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ test }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import {mapState, mapMutations} from 'vuex'
import {TEST} from '../../store/mutation-types'

export default {
  computed: {
    ...mapState([
      'test'
    ]),
    test () {
      return this.$store.state.test
    }
  },
  methods: {
    ...mapMutations([
      TEST
    ]),
    increment () {
      this[TEST](this.test+=1) // 调用mutation
      console.log(this.test) // 获取store中test数据
    },
    decrement () {
      this[TEST](this.test-=1) // 调用mutation
      console.log(this.test) // 获取store中test数据
    }
  }
}

</script>
<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "./index.styl"
</style>

