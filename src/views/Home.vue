<template>
  <div class="home">
    <h1>Останні страви</h1>
    <ToCartButton/>
  </div>
</template>

<script>
import ToCartButton from '../components/Main/Buttons/ToCartButton/ToCartButton'
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  components: {
    ToCartButton
  }
})
</script>
<style lang="sass">
  @import "../sass/views/Home"
</style>
