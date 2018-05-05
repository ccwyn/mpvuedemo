<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>

export default {
  props: ['text']
}
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "./card.styl"
</style>
