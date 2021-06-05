<template>
    <v-dialog
      :value="value"
      @keydown="escapeClose"
      class="ProductAdder"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <div
        class="ProductAdder"
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
          <v-toolbar-title>Додати продукт</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              text
              dark
              @click="addProductTo"
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
  name: 'ProductAdder',
  props: {
    value: Boolean
  },
  components: {
    AdderForm
  },
  methods: {
    ...mapActions(['addProduct']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      this.$refs.adder.resetForm()
      this.$emit(
        'input', false
      )
    },
    addProductTo () {
      this.addProduct(this.$refs.adder.getFormData())
      this.closeModal()
      this.$emit('adder:addedProduct')
    }
  }
})
</script>
<style lang="sass">
    @import "styles"
</style>
