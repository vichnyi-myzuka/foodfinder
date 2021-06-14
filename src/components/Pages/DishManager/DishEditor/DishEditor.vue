<template>
  <v-dialog
    :value="value"
    @keydown="escapeClose"
    class="DishEditor"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <div
      class="DishEditor"
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
        <v-toolbar-title>Редагувати страву</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            dark
            @click="saveDishToStore"
          >
            Зберегти
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout>
        <DishEditorForm :active="value" :dish="dish" ref="dishEditor"/>
      </v-layout>
    </div>
  </v-dialog>
</template>
<script>
import Vue from 'vue'
import DishEditorForm from './EditorForm/DishEditorForm'
import { mapActions } from 'vuex'
import { updateDish } from '../../../../api/API'

export default Vue.extend({
  name: 'DishEditor',
  props: {
    value: Boolean,
    dish: {
      required: true
    }
  },
  components: {
    DishEditorForm
  },
  methods: {
    ...mapActions(['addDish', 'saveDish', 'updateDishInCart']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      // this.$refs.dishEditor.resetForm()
      this.$emit(
        'input', false
      )
    },
    reRenderForm () {
      if (this.$refs.dishEditor) { this.$refs.dishEditor.$forceUpdate() }
    },
    saveDishToStore () {
      const data = this.$refs.dishEditor.getFormData()
      updateDish(data).then(response => {
        const newData = response.data
        this.saveDish({
          oldDish: this.dish,
          newDish: newData
        }).then(() => {
          this.updateDishInCart(newData)
          this.closeModal()
          this.$emit('editor:editedDish')
        })
      }).catch(e => console.log(e))
    }
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
