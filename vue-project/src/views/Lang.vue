<script setup>
import ChangeLocale from "@/components/ChangeLocale.vue";
</script>

<template>
  <div class="greetings">
    <p class="text">
      <span>{{ $t("message.helloBig") }}</span>

      <ChangeLocale />
    </p>
  </div>
</template>

<style scoped>
  span {
    float: left;
    font-size: 25px;
  }
  .text {
    color: #0099ff; font-weight: 900;
  }
</style>