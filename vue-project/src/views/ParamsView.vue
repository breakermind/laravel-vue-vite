<script>
export default {
  name: "ParamsView",
  data() {
    return {
      id: this.$route.params.id,
      code: this.$route.params.code,
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>This is params page</h1>
    <h4> {{ id }} {{ code }} </h4>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>