<template>
  <div>
    <ul>
      <Movie :movie="movie" v-for="(movie, key) in movies" bg="subject-hero-bg"></Movie>
    </ul>
  </div>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'movie-list',
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    Movie
  }
}
</script>
