<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="left circle"></div>
      <div class="right circle"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters([
      'loading',
    ])
  },
}
</script>
