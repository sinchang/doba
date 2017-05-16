<template>
  <div>
    <Movie :movie="movie" bg="app-bg"></Movie>
    <section class="subject-casts">
      <div class="casts-title">主演</div>
      <div class="subject-casts-flex">
        <cast v-for="(cast, key) in movie.casts" :cast="cast" :key="cast.id"></cast>
      </div>
    </section>
    <section class="subject-content">
      <div class="title">剧情简介</div>
      <p>{{movie.summary}}</p>
    </section>
    <Loading></Loading>
  </div>
</template>

<script>
import Movie from '../components/Movie'
import Cast from '../components/Cast'
import Loading from '../components/Loading'

export default {
  name: 'subject',
  computed: {
    movie() {
      return this.$store.state.subject.movie
    }
  },
  created () {
    this.$store.dispatch('fetchSubject', this.$store.state.route.params.id)
  },
  components: {
    Movie,
    Cast,
    Loading
  }
}
</script>
