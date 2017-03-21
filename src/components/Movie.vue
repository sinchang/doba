<template>
  <section class="subject-header">
    <section :class="['subject-hero', size]">
      <div class="subject-hero-container">
        <router-link :to="`/subject/${movie.id}`">
          <img :src="movie.images.large">
        </router-link>
        <div class="subject-hero-info">
          <div class="subject-title">
            <div class="title-1">{{movie.title}}</div>
            <div class="title-2">{{movie.original_title}}</div>
          </div>
          <div class="rating">
            <Icon name="star" />
            <span class="average">{{movie.rating.average}}</span>
            <span class="max">/10</span>
          </div>
          <div>{{movie.year}} / <span v-for="(gener, key) in movie.genres">{{gener}},</span></div>
          <div>导演： <span v-for="(director, key) in movie.directors"><router-link :to="`/celebrity/${director.id}`">{{director.name}}</router-link></span></div>
          <div>主演： <span v-for="(cast, key) in movie.casts"><router-link :to="`/celebrity/${cast.id}`">{{cast.name}} / </router-link></span></div>
          <a :href="movie.alt">
            <div class="douban-link">
              <Icon name="douban"></Icon>
            </div>
          </a>
        </div>
      </div>
      <div :class="bg"
           :style="{backgroundImage: `url('${movie.images.large}')`}"></div>
    </section>
  </section>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'movie',
  computed: {
    size() {
      return this.$route.params.id ? 'small' : ''
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
    bg: {
      type: String,
      required: true
    }
  },
  components: {
    Icon
  }
}
</script>
