<template>
  <div>
    <div class="loading" v-if="loading">
      222222222222222222
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
