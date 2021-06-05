<template>
  <section class="EmptyShower">
    <p class="Text">
      Тут немає {{ title }}
    </p>
    <p class="Description">
      {{description}}
    </p>
  </section>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'EmptyShower',
  props: {
    title: String,
    description: String
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
