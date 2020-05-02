<template>
  <div id="app">
    <side-bar-template/>
    <pad-template/>
  </div>
</template>

<script>
import sideBarTemplate from './components/sideBarTemplate.vue';
import padTemplate from './components/padTemplate.vue';


export default {
  name: 'App',
  components: {
    sideBarTemplate,
    padTemplate,
  },
};
</script>

<style lang="scss">
  body,html {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    display: flex;
    height: 100%;
  }
</style>
