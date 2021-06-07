<template>
    <v-dialog
      :value="value"
      @keydown="escapeClose"
      class="ProductEditor"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <div
        class="ProductEditor"
      >
        <v-toolbar
          flat
          dark
          color="purple darken-3"
        >
          <v-btn
            icon
            dark
            @click="closeModal"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Редагувати продукт</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              text
              dark
              @click="saveProductToStore"
            >
              Зберегти
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout>
          <EditorForm :active="value" :product="product" ref="editor"/>
        </v-layout>
      </div>
    </v-dialog>
</template>
<script>
import Vue from 'vue'
import EditorForm from './EditorForm/EditorForm'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'ProductEditor',
  props: {
    value: Boolean,
    product: {
      required: true
    }
  },
  components: {
    EditorForm
  },
  methods: {
    ...mapActions(['addProduct', 'saveProduct']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      this.$refs.editor.resetForm()
      this.$emit(
        'input', false
      )
    },
    reassignArea () {
      if (this.$refs.editor) { this.$refs.editor.assignAreas() }
    },
    saveProductToStore () {
      this.saveProduct({
        oldProduct: this.product,
        newProduct: this.$refs.editor.getFormData()
      })
      this.closeModal()
      this.$emit('editor:editedProduct')
    }
  }
})
</script>
<style lang="sass">
    @import "styles"
</style>
