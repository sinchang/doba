<template>
  <div>
    <div class="intheater title">正在上映的电影</div>
    <MovieList :movies="movies"></MovieList>
    <Loading></Loading>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

export default {
  name: 'inTheaters',
  computed: {
    ...mapGetters([
      'movies'
    ])
  },
  methods: {
    ...mapMutations([
      'FETCH_INTHEATERS'
    ])
  },
  mounted () {
    this.FETCH_INTHEATERS()
  },
  components: {
    MovieList,
    Loading
  }
}
</script>
