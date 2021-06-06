<template>
  <div class="wrapper">
    <v-text-field
      label="Пошук"
      class="SearchField"
      v-if="getSearchState"
      @input="setSearchQuery(query)"
      v-model="query"
      dense
      solo
    ></v-text-field>
    <v-btn icon @click="changeSearchState">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-filter</v-icon>
    </v-btn>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'NavigationMenu',
  computed: {
    ...mapGetters(['getSearchQuery', 'getSearchState'])
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'setSearchState']),
    changeSearchState () {
      this.setSearchState()
      this.setSearchQuery('')
    }
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
