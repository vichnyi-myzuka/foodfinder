<template>
    <div class="FinalListItem">
      <h3 class="FinalListItemTitle">
        {{ item.product.title + " : " + item.amount + " " + item.product.measure }}
      </h3>
      <div class="Properties">
        <p class="FinalListItemTitle">
          {{item.product.price + " грн"}}
        </p>
        <p class="FinalListItemAmount">
          {{ item.product.amount + " " + item.product.measure }}
        </p>

        <p class="FinalListItemPackage">
          {{"x " + item.packages }}
        </p>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FinalListItem',
  props: {
    item: Object
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
