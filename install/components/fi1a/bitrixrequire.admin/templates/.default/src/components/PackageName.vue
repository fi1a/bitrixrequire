<template>
  <div class="fbr-package-name">
    <input :value="value" @input="$emit('update', $event.target.value)" v-on:keyup.enter="$emit('enter')" v-on:keyup="searchSuggest" type="text" tabindex="1" placeholder="Название пакета" autocomplete="off">
    <div v-if="suggests.length" class="suggest">
      <ul>
        <li @click="selectSuggest(suggest.name)" v-for="suggest in suggests">{{suggest.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PackageName',

  props: {
    value: String
  },

  data() {
    return {
      suggests: [],
    }
  },

  timeout: null,

  mounted() {
    document.documentElement.addEventListener('click', () => {
      this.suggests = [];
    }, false)
  },

  methods: {
    searchSuggest() {
      if (this.value.length <= 3) {
        return;
      }

      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        this.timeout = null;

        axios.get('https://packagist.org/search.json?q=' + this.value)
            .then((response) => {
              this.suggests = response.data.results;
            });
      }, 600);
    },

    selectSuggest(packageName) {
      this.suggests = [];
      this.$emit('update', packageName)
    }
  }
}
</script>