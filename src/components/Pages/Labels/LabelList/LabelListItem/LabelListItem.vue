<template>
  <v-card
    class="LabelListItem"
    link
    elevation="0"
    @click="isClicked"
  >
    <div class="LabelInfo">
      <h2 class="LabelTitle">
        {{ label.name }}
      </h2>
    </div>
    <v-btn
      class="LabelRemoveButton"
      fab
      dark
      small
      color="red lighten-2"
      elevation="0"
      @click="removeLabel"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </v-card>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LabelListItem',
  props: {
    label: {
      required: true
    }
  },
  methods: {
    removeLabel () {
      this.$emit('removeLabel', this.label)
    },
    isClicked () {
      this.$emit('labelClicked', this.label)
    }
  }
})
</script>
<style lang="sass" scoped>
  @import "styles"
</style>
