<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <Icon name="doba"></Icon>
      </router-link>
      <div class="search-wrapper">
        <Search></Search>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <p>
        <a href="https://github.com/haishanh/doba-react">doba-react</a>
        <span>clone made with </span>
        <span class="red">love</span>
        <span> by sinchang</span>
      </p>
      <a href='https://github.com/sinchang/doba-vue'>
        <Icon name="github"></Icon>
      </a>
    </footer>
  </div>
</template>

<script>
import Icon from './components/Icon'
import Search from './components/Search'
export default {
  name: 'app',
  components: {
    Icon,
    Search
  }
}
</script>
