<template>
  <div>
    <div class="celebrity-page">
      <div class="content-title">{{celebrity.name}} {{celebrity.name_en}}</div>
      <div class="celebrity-profile">
        <div class="celebrity-image">
          <img :src="celebrity.avatars.large">
        </div>
        <div class="celebrity-info">
          <div>性别：{{celebrity.gender}}</div>
          <div v-if="celebrity.born_place">出生地：{{celebrity.born_place}}</div>
          <div>
            <a :href="celebrity.alt">
              <div class="douban-link">
                <Icon name="douban"></Icon>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="celebrity-works">
        <div class="title">作品</div>
        <div class="celebrity-works-flex">
          <div v-for="work in celebrity.works">
            <router-link :to="`/subject/${work.subject.id}`">
              <img :src="work.subject.images.medium">
              <div>{{work.subject.title}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Loading></Loading>
  </div>
</template>

<script>
import Icon from '../components/Icon'
import Loading from '../components/Loading'

export default {
  name: 'celebrity',
  computed: {
    celebrity() {
      return this.$store.state.celebrity.celebrity
    }
  },
  created() {
    this.$store.dispatch('fetchCelebrity', this.$store.state.route.params.id)
  },
  components: {
    Icon,
    Loading
  }
}
</script>
