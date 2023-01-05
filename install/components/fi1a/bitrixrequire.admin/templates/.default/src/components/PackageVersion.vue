<template>
  <div class="fbr-package-version">
    <input @input="$emit('update', $event.target.value)" v-on:keyup.enter="$emit('enter')" type="text" tabindex="2" placeholder="Версия пакета" autocomplete="off">
  </div>
</template>

<script>

export default {
  name: 'PackageVersion',

  data() {
    return {};
  }
}
</script>