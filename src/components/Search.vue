<template>
  <div>
    <div :class="['search-bar', {'focused': focused}]">
      <div class="search-icon">
        <Icon name="search"></Icon>
      </div>
      <input class="search-input"
             type="text"
             @keyup.enter="search"
             @focus="focused=true"
             @blur="focused=false"
             placeholder="搜索..." />
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'search',
  data() {
    return {
      focused: false
    }
  },
  methods: {
   search(e) {
     this.$store.dispatch('searchHandle', e)
   }
  },
  components: {
    Icon
  }
}
</script>
