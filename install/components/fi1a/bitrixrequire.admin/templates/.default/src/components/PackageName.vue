<template>
  <div class="fbr-package-name">
    <input @input="$emit('update', $event.target.value)" type="text" tabindex="1" placeholder="Название пакета" autocomplete="off">

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
    errors: Object
  },

  data() {
    return {
    }
  }
}
</script>