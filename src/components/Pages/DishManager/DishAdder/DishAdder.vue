<template>
  <v-dialog
    :value="value"
    @keydown="escapeClose"
    class="DishAdder"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <div
      class="DishAdder"
    >
      <v-toolbar
        flat
        dark
        color="teal darken-1"
      >
        <v-btn
          icon
          dark
          @click="closeModal"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Додати страву</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            dark
            @click="addDishTo"
          >
            Додати
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout>
        <AdderForm ref="adder"/>
      </v-layout>
    </div>
  </v-dialog>
</template>
<script>
import Vue from 'vue'
import AdderForm from './AdderForm/AdderForm'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'DishAdder',
  props: {
    value: Boolean
  },
  components: {
    AdderForm
  },
  methods: {
    ...mapActions(['addDish']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      // this.$refs.adder.resetForm()
      this.$emit(
        'input', false
      )
    },
    addDishTo () {
      this.addDish(this.$refs.adder.getFormData())
      this.closeModal()
      this.$emit('adder:addedDish')
    }
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
