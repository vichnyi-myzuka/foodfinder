<template>
    <div class="Labels">
      <v-card-title>Категорії продуктів</v-card-title>
      <LabelList :type="0"
                 :labels="getProductsLabels"
      />

      <v-card-title>Категорії страв</v-card-title>
      <LabelList :type="1"
                 :labels="getDishesLabels"
                />
      <LabelAdder
        v-model="addModal"
      />
      <ActionButton :eventHandler="openAddModal"/>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { loadAllLabels } from '../api/Utility'
import LabelList from '../components/Pages/Labels/LabelList/LabelList'
import ActionButton from '../components/Main/Buttons/ActionButton/ActionButton'
import LabelAdder from '../components/Pages/Labels/LabelAdder/LabelAdder'
export default Vue.extend({
  name: 'Labels',
  components: {
    LabelList, ActionButton, LabelAdder
  },
  computed: {
    ...mapGetters(['getProductsLabels', 'getDishesLabels'])
  },
  data () {
    return {
      addModal: false
    }
  },
  methods: {
    updateLists () {
      loadAllLabels()
    },
    openAddModal () {
      this.addModal = !this.addModal
    }
  },
  mounted () {
  }
})
</script>
<style lang="sass" scoped>
  @import "../sass/views/Labels"
</style>
