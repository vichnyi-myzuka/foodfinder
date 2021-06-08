<template>
    <v-btn
      class="AddProductButton"
      elevation="0"
      color="green darken-1"
      dark
      outlined
      @click="action"
    >Додати</v-btn>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AddProductButton',
  props: {
    action: Function
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
