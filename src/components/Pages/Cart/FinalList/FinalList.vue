<template>
    <div class="FinalList">
      <h1 class="FinalListTitle">Фінальний список</h1>
      <FinalListItem v-for="(item, index) in getLoadedCart.products" :key="index" :item="item"/>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import FinalListItem from '../FinalListItem/FinalListItem'
export default Vue.extend({
  name: 'FinalList',
  components: {
    FinalListItem
  },
  computed: {
    ...mapGetters(['getLoadedCart'])
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
