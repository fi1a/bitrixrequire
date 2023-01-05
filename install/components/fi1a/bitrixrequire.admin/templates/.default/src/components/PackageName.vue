<template>
  <div class="fbr-package-name">
    <input :value="value" @input="$emit('update', $event.target.value)" v-on:keyup.enter="$emit('enter')" type="text" tabindex="1" placeholder="Название пакета" autocomplete="off">

    <!--<div class="suggest">
      <ul>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
        <li>fi1a/console</li>
      </ul>
    </div>-->
  </div>
</template>

<script>



export default {
  name: 'PackageName',

  props: {
    value: String
  },

  data() {
    return {
    }
  }
}
</script>