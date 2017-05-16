<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="left circle"></div>
      <div class="right circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
}
</script>
