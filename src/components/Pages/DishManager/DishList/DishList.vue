<template>
  <section class="DishList">
    <DishListItem v-for="dish in dishesToDisplay" :dish="dish" :key="dish.title"
                     @removeDish="removeDishFromStore"
                     @dishClicked="dishChosen"
    />
  </section>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import hash from 'object-hash'
import { sortBy } from 'lodash'
import DishListItem from './DishListItem/DishListItem'
export default Vue.extend({
  name: 'DishList',
  components: {
    DishListItem
  },
  props: {
    selectedLabels: Array
  },
  computed: {
    ...mapGetters(['getDishes', 'getSearchQuery']),
    dishesToDisplay () {
      let toDisplay = this.getDishes
      toDisplay = sortBy(toDisplay, ['title'])
      if (this.getSearchQuery) {
        toDisplay = toDisplay.filter(el => el.title.includes(this.getSearchQuery))
      }
      return toDisplay
    }
  },
  methods: {
    ...mapActions(['removeDish']),
    removeDishFromStore (value) {
      this.removeDish(value)
    },
    dishChosen (value) {
      this.$emit('dish:selected', value)
    },
    hashFunction (object) {
      return hash(object)
    }
  },
  async mounted () {
  }
})
</script>
<style lang="sass" scoped>
  @import "styles"
</style>
