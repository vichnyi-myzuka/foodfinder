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
        <DishAdderForm v-if="value" ref="dishAdder"/>
      </v-layout>
    </div>
  </v-dialog>
</template>
<script>
import Vue from 'vue'
import DishAdderForm from './AdderForm/DishAdderForm'
import { mapActions } from 'vuex'
import { addDish } from '../../../../api/API'

export default Vue.extend({
  name: 'DishAdder',
  props: {
    value: Boolean
  },
  components: {
    DishAdderForm
  },
  methods: {
    ...mapActions(['addDish']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      // this.$refs.dishAdder.resetForm()
      this.$emit(
        'input', false
      )
    },
    addDishTo () {
      const data = this.$refs.dishAdder.getFormData()
      addDish(data).then(response => {
        const data = response.data
        console.log(data)
        this.addDish(data).then(() => {
          this.$emit('adder:addedDish')
          this.closeModal()
        })
      }).catch(e => console.log(e))
    }
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
