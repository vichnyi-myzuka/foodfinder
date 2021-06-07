<template>
  <v-combobox
    v-model="selected"
    :items="getLabels"
    @input="updateFilter"
    chips
    color="purple darken-3"
    class="ProductFilter"
    clearable
    elevation="0"
    label="Оберіть категорії"
    multiple
    :item-text="(el) => el.title"
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        color="purple darken-3"
        dark
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item.title }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'ProductFilter',
  computed: {
    ...mapGetters(['getLabels'])
  },
  data () {
    return {
      selected: []
    }
  },
  methods: {
    updateFilter () {
      this.$emit('filter:updated', this.selected)
    },
    remove (item) {
      this.selected.splice(this.selected.indexOf(item), 1)
      this.selected = [...this.selected]
      this.updateFilter()
    }
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
