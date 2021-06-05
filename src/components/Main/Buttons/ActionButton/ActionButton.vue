<template>
  <v-btn
    color="teal darken-1"
    class="ActionButton"
    dark
    @click="eventHandler"
    fab
    elevation="0"
  >
    <v-icon>
      mdi-plus
    </v-icon>
  </v-btn>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ActionButton',
  props: {
    eventHandler: {
      type: Function,
      required: false
    }
  }
})
</script>
<style lang="sass" scoped>
  @import "styles"
</style>
