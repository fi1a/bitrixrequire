<template>
  <index />
</template>

<script>
export default {
  methods: {
    canView() {
      return this.$right >= 'E';
    },

    canEdit() {
      return this.$right >= 'F';
    }
  }
}
</script>

<style scoped>
</style>
