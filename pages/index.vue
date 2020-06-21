<template>
    <sui-container style="margin:20px 0">
        <post-card />
        <post-card />
        <post-card />   
    </sui-container>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {
  components: {
      PostCard
  }
}
</script>

<style lang="scss" scope>

  .test {
    font-size:123px;
  }
</style>