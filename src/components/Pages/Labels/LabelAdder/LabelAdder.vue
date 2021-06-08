<template>
  <v-dialog
    :value="value"
    @keydown="escapeClose"
    class="LabelAdder"
    persistent
    scrollable
  >
    <div
      class="LabelAdder"
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
        <v-toolbar-title>Додати категорію</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            dark
            @click="addLabel"
          >
            Додати
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout>
        <v-form>
          <v-row>
            <v-col>
              <v-text-field
                autofocus
                label="Назва"
                v-model="name"
              >

              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="type"
                :items="types"
                label="Категорія"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-layout>
    </div>
  </v-dialog>
</template>
<script>
import Vue from 'vue'
import { addDishLabel, addProductLabel } from '../../../../api/API'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'LabelAdder',
  data () {
    return {
      name: '',
      type: 0,
      types: [{
        text: 'Продукти',
        value: 0,
        disabled: false,
        divider: false,
        header: ''
      }, {
        text: 'Страви',
        value: 1,
        disabled: false,
        divider: false,
        header: ''
      }]
    }
  },
  props: {
    value: Boolean
  },
  methods: {
    ...mapActions(['addProductLabel', 'removeProductLabel', 'updateProductLabel',
      'addDishLabel', 'removeDishLabel', 'updateDishLabel']),
    escapeClose (e) {
      if (e.keyCode === 27) this.closeModal()
    },
    closeModal () {
      this.$emit(
        'input', false
      )
    },
    addLabel () {
      if (this.type === 0) {
        addProductLabel(this.name).then(response => {
          this.$emit('label:added')
          this.addProductLabel(response.data)
          this.closeModal()
        }).catch(e => console.log(e))
      } else {
        addDishLabel(this.name).then(response => {
          this.$emit('label:added')
          this.addDishLabel(response.data)
          this.closeModal()
        }).catch(e => console.log(e))
      }
    }
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
