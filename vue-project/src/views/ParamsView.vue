<script>
export default {
  name: "ParamsView",
  data() {
    return {
      id: this.$route.params.id ?? 0,
      code: this.$route.params.code ?? 'empty',
    }
  }
}
</script>

<template>
  <div class="about">
    <h1> This is params page </h1>
    <span> {{ id }} {{ code }} </span>
  </div>
</template>

<style scoped>
span { float: left; padding: 10px; }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>