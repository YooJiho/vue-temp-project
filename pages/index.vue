<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title scss-test">
        vue-typescript
      </h1>
      <h2 class="subtitle">
        My dazzling Nuxt.js project
      </h2>
      <div class="links">
        <div>
          <sui-button>Click Here</sui-button>
          <sui-button content="Content as a prop" />
          <div is="sui-button">This is a div</div>
        </div>
        <div>
    <sui-button primary>Primary</sui-button>
    <sui-button secondary>Secondary</sui-button>
  </div>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  components: {

  }
})
</script>

<style>

</style>