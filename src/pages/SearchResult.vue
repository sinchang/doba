<template>
  <div>
    <div class="intheater title" v-if="keyword" v-show="loading">搜索的 "{{keyword}}" 结果</div>
    <MovieList :movies="results" v-show="loading"></MovieList>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import MovieList from '../components/MovieList'

export default {
  name: 'search-result',
  computed: {
    results() {
      return this.$store.state.results
    },
    keyword() {
      return this.$store.state.keyword
    },
    loading() {
      return !this.$store.state.loading
    }
  },
  mounted() {
    this.$store.dispatch('searchHandle')
  },
  components: {
    Loading,
    MovieList
  }
}
</script>
