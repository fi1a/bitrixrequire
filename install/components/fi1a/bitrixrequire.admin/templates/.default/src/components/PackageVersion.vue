<template>
  <div class="fbr-package-version">
    <input :value="value" @input="$emit('update', $event.target.value)" v-on:keyup.enter="$emit('enter')" type="text" tabindex="2" :placeholder="$t('packageVersion')" autocomplete="off">
  </div>
</template>

<script>

export default {
  name: 'PackageVersion',

  props: {
    value: String
  },

  data() {
    return {};
  }
}
</script>