<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" class="locale-changer-select">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>

<script>
// Change locale via `global` property
// i18n.global.locale = 'en'
</script>

<style scoped>
  .locale-changer {float: right; width: auto; height: auto;}
  .locale-changer-select {float: right; min-width: 50px; padding: 10px; background: #0099ff11; color: #0099ff; font-weight: bold; text-align: center;}
</style>