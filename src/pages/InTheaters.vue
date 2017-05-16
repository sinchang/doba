<template>
  <div>
    <div class="intheater title">正在上映的电影</div>
    <MovieList :movies="movies"></MovieList>
    <Loading></Loading>
  </div>
</template>

<script>
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

export default {
  name: 'inTheaters',
  computed: {
    movies() {
      return this.$store.state.inTheaters.movies
    }
  },
  created () {
    this.$store.dispatch('fetchInTheaters')
  },
  components: {
    MovieList,
    Loading
  }
}
</script>
