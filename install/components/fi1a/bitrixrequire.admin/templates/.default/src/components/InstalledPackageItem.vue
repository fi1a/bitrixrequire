<template>
  <tr>
    <td>
      <div class="fbr-package-item-name">{{package.package}}:{{package.version}} ({{package.installedVersion}})</div>
      <div v-if="package.description" class="fbr-package-item-description">{{package.description}}</div>
      <div v-if="package.homepage" class="fbr-package-item-homepage"><a target="_blank" :href="package.homepage">{{package.homepage}}</a></div>
      <div v-if="package.modules.length">
        Используют модули:
        <ul>
          <li v-for="module in package.modules">
            <template v-if="module.name"><b>&laquo;{{module.name}}&raquo;</b>&nbsp;</template>({{module.moduleId}})
            <template v-if="module.description"><br>{{module.description}}</template>
          </li>
        </ul>
      </div>
    </td>
    <td class="fbr-package-remove-container">
      <input v-if="!package.modules.length" type="button" @click="$emit('remove', package.package)"  value="Удалить">
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