<template>
  <div class="wrapper">
    <v-dialog :fullscreen="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
        v-on="on" v-bind="attrs">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-text-field
        label="Пошук"
        class="SearchField"
        autofocus
        @input="setSearchQuery(query)"
        v-model="query"
        @keydown="closeSearch"
        solo
      ></v-text-field>
    </v-dialog>

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
  watch: {
    getSearchQuery (val) {
      this.query = val
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'setSearchState']),
    closeSearch (e) {
      if (e.keyCode === 13) {
        this.setSearchState()
      }
    },
    changeSearchState () {
      this.setSearchState()
      this.setSearchQuery('')
    }
  }
})
</script>
<style lang="sass">
    @import "styles"
</style>
