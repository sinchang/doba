<template>
  <div>
    <div :class="['search-bar', {'focused': focused}]">
      <div class="search-icon">
        <Icon name="search"></Icon>
      </div>
      <input class="search-input" type="text" v-model="keyword" @keyup.enter="search" @focus="focused=true" @blur="focused=false" placeholder="搜索..." />
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'search',
  data() {
    return {
      focused: false,
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('searchHandle', this.keyword)
    }
  },
  components: {
    Icon
  }
}
</script>
