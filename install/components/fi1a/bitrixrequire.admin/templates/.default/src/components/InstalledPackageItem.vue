<template>
  <tr>
    <td>
      <div class="fbr-package-item-name">{{package.package}}:{{package.version}} ({{package.installedVersion}})</div>
      <div v-if="package.description" class="fbr-package-item-description">{{package.description}}</div>
      <div v-if="package.homepage"><a target="_blank" :href="package.homepage">{{package.homepage}}</a></div>
    </td>
    <td class="fbr-package-remove-container">
      <input type="button" @click="$emit('remove', package.package)"  value="Удалить">
    </td>
  </tr>
</template>

<script>

export default {
  name: 'InstalledPackageItem',

  props: {
    package: Object
  },

  data() {
    return {
    }
  }
}
</script>