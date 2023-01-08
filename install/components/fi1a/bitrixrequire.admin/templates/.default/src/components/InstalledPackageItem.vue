<template>
  <tr>
    <td>
      <div class="fbr-package-item-name">{{package.package}}:{{package.version}} ({{package.installedVersion}})</div>
      <div v-if="package.description" class="fbr-package-item-description">{{package.description}}</div>
      <div v-if="package.homepage" class="fbr-package-item-homepage"><a target="_blank" :href="package.homepage">{{package.homepage}}</a></div>
      <div v-if="package.modules.length">
        {{$t('useModule')}}
        <ul>
          <li v-for="module in package.modules">
            <template v-if="module.name"><b>&laquo;{{module.name}}&raquo;</b>&nbsp;</template>({{module.moduleId}})
            <template v-if="module.description"><br>{{module.description}}</template>
            <template v-if="module.version"><br>{{$t('needPackerVersion')}} {{module.version}}</template>
          </li>
        </ul>
      </div>
    </td>
    <td class="fbr-package-remove-container">
      <input :disabled="$parent.loading" v-if="!package.modules.length && $root.canEdit()" type="button" @click="$emit('remove', package.package)" :value="$t('remove')">
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