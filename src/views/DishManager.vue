<template>
  <div class="DishManager">
    <EmptyShower
      v-if="noDishes"
      title="страв"
      description="натисніть на кнопку '+', щоб додати страви"
    />
    <DishAdder v-model="addModal" @adder:addedDish="updateDishes"/>
    <DishEditor
      ref="dishEditor"
      :dish="dishSelected"
      v-model="editModal"
      @input="closeEdit"
      @editor:editedDish="updateDishes"/>
    <ActionButton :eventHandler="openAddModal"/>
    <DishList v-if="!noDishes" ref="dishList" @dish:selected="changeSelectedDish"/>
  </div>
</template>
<script>
import Vue from 'vue'
import ActionButton from '../components/Main/Buttons/ActionButton/ActionButton'
import EmptyShower from '../components/Main/EmptyShower/EmptyShower'
import DishAdder from '../components/Pages/DishManager/DishAdder/DishAdder'
import DishEditor from '../components/Pages/DishManager/DishEditor/DishEditor'
import DishList from '../components/Pages/DishManager/DishList/DishList'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'DishManager',
  components: {
    ActionButton, EmptyShower, DishEditor, DishAdder, DishList
  },
  computed: {
    ...mapGetters(['getDishes']),
    noDishes () {
      return this.getDishes.length === 0
    }
  },
  data () {
    return {
      dishes: [],
      addModal: false,
      editModal: false,
      dishSelected: {}
    }
  },
  methods: {
    openAddModal () {
      this.addModal = true
    },
    openEditModal () {
      this.editModal = true
    },
    closeEdit () {
    },
    updateDishes () {
    },
    changeSelectedDish (value) {
      this.dishSelected = value
      this.$refs.dishEditor.reRenderForm()
      this.openEditModal()
    }
  }
})
</script>
<style lang="sass">
  @import "../sass/views/DishManager"
</style>
