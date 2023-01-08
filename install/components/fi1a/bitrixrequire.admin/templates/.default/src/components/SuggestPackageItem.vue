<template>
  <tr>
    <td>
      <div class="fbr-package-item-name">{{package.package}}</div>
      <div v-if="package.description" class="fbr-package-item-description">{{package.description}}</div>
      <div v-if="package.homepage"><a target="_blank" :href="package.homepage">{{package.homepage}}</a></div>
    </td>
    <td class="fbr-package-remove-container">
      <input :disabled="$parent.loading" v-if="$root.canEdit()" type="button" @click.prevent="$emit('require', package.package)"  value="Добавить" class="adm-btn-green">
    </td>
  </tr>
</template>

<script>
export default {
  name: 'SuggestPackageItem',

  props: {
    package: Object
  },

  data() {
    return {}
  }
}
</script>