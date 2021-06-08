<template>
  <section class="LabelList">
    <LabelListItem v-for="label in labelsToDisplay" :label="label" :key="label.name"
                  @removeLabel="removeLabel"
    />
  </section>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import hash from 'object-hash'
import { sortBy } from 'lodash'
import LabelListItem from './LabelListItem/LabelListItem'
import { removeDishLabel, removeProductLabel } from '../../../../api/API'

export default Vue.extend({
  name: 'LabelList',
  components: {
    LabelListItem
  },
  props: {
    labels: Array,
    type: Number
  },
  computed: {
    ...mapGetters(['getSearchQuery']),
    labelsToDisplay () {
      let toDisplay = this.labels
      toDisplay = sortBy(toDisplay, ['title'])
      if (this.getSearchQuery) {
        toDisplay = toDisplay.filter(el => el.name.includes(this.getSearchQuery))
      }
      return toDisplay
    }
  },
  methods: {
    ...mapActions(['addProductLabel', 'removeProductLabel', 'updateProductLabel',
      'addDishLabel', 'removeDishLabel', 'updateDishLabel']),
    removeLabel (value) {
      if (this.type === 0) {
        removeProductLabel(value.id).then((response) => {
          this.$emit('label:deleted')
          this.removeProductLabel(response.data)
          console.log(response.data)
        }).catch(e => console.log(e))
      } else {
        removeDishLabel(value.id).then((response) => {
          this.$emit('label:deleted')
          this.removeDishLabel(response.data)
          console.log(response.data)
        }).catch(e => console.log(e))
      }
    },
    hashFunction (object) {
      return hash(object)
    }
  },
  async mounted () {
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
