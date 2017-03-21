<template>
  <div>
    <div class="intheater title" v-if="keyword">搜索的 "{{keyword}}" 结果</div>
    <MovieList :movies="result"></MovieList>
    <Loading></Loading>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Loading from '../components/Loading'
import MovieList from '../components/MovieList'

export default {
  name: 'search-result',
  computed: {
    ...mapGetters([
      'result',
      'keyword'
    ])
  },
  created () {
    this.SEARCH()
  },
  methods: {
    ...mapMutations([
      'SEARCH'
    ])
  },
  components: {
    Loading,
    MovieList
  }
}
</script>
