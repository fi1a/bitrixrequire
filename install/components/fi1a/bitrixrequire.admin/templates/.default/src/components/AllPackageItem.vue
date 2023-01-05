<template>
  <tr>
    <td>
      <div class="fbr-package-item-name">{{package.package}} ({{package.installedVersion}})</div>
      <div v-if="package.description" class="fbr-package-item-description">{{package.description}}</div>
      <div v-if="package.homepage"><a target="_blank" :href="package.homepage">{{package.homepage}}</a></div>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'AllPackageItem',

  props: {
    package: Object
  },

  data() {
    return {
    }
  }
}
</script>