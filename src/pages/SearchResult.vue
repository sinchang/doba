<template>
  <div>
    <div class="intheater title" v-if="keyword">搜索的 "{{keyword}}" 结果</div>
    <MovieList :movies="results"></MovieList>
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
    }
  },
  created () {
    this.$store.dispatch('searchHandle', undefined)
  },
  components: {
    Loading,
    MovieList
  }
}
</script>
