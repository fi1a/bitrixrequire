<template>
  <div class="spinner-container">
    <div v-if="errors.length" class="adm-info-message-wrap adm-info-message-red">
      <div class="adm-info-message">
        <div class="adm-info-message-title">{{$t('errors')}}</div>
        <template v-for="error in errors">
          {{error.message}}<br>
        </template>
        <br>
        <div class="adm-info-message-icon"></div>
      </div>
    </div>
    <div>
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col">
            <PackageName @update="v$.require.package.$model = $event"/>
            <PackageVersion @update="v$.require.version.$model = $event"/>
            <input @click.prevent="require" :disabled="v$.require.$invalid" type="button" value="Добавить" class="adm-btn-green fbr-package-require">
          </div>
          <div class="fbr-col">
          </div>
        </div>
      </div>
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col white">
            <h2>Установленные</h2>
            <table class="fbr-package-list">
              <tr>
                <td>
                  <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                  <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                  <div><a href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                </td>
                <td class="fbr-package-remove-container">
                  <input type="button" v-on:click="console = true"  value="Удалить">
                </td>
              </tr>
              <tr>
                <td>
                  <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                  <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                  <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                </td>
                <td class="fbr-package-remove-container">
                  <input type="button" v-on:click="console = true" value="Удалить">
                </td>
              </tr>
            </table>
          </div>
          <div class="fbr-col white">
            <div v-if="console === true">
              <div class="fbr-console">
                <span>&gt;&gt;&gt;</span><br><br>
                <div v-html="output"></div><br>
                <span>&lt;&lt;&lt;</span><br>
              </div>
              <input class="fbr-clear-console" type="button" v-on:click="console = false" value="Скрыть">
            </div>

            <div v-if="console === false" class="fbr-suggest-packages">
              <h2>Предложенные</h2>
              <table class="fbr-package-list">
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-remove-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-add-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-add-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-add-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-add-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="fbr-package-item-name">fi1a/collection:^2.0</div>
                    <div class="fbr-package-item-description">Структуры данных и коллекции в PHP</div>
                    <div><a target="_blank" href="https://github.com/fi1a/collection">https://github.com/fi1a/collection</a></div>
                  </td>
                  <td class="fbr-package-add-container">
                    <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green">
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col">
          </div>
          <div class="fbr-col">
          </div>
        </div>
      </div>
    </div>
    <Spinner :loading="loading"/>
  </div>
</template>

<script>

import {reactive} from 'vue';
import {required} from '@vuelidate/validators'
import {useVuelidate} from "@vuelidate/core";
import PackageName from "@/components/PackageName.vue";
import PackageVersion from "@/components/PackageVersion.vue";
import Spinner from "@/components/Spinner.vue";
import api from "./../api/api";

export default {
  name: 'Index',

  components: {PackageName, PackageVersion, Spinner},

  setup () {
    const state = reactive({
      require: {
        package: '',
        version: ''
      }
    })

    const rules = {
      require: {
        package: {
          required
        },
        version: {}
      }
    }

    const v$ = useVuelidate(rules, state)

    return {state, v$}
  },

  data() {
    return {
      loading: true,
      errors: [],

      console: false,
      output: ''
    }
  },

  mounted() {
    this.loading = false;
  },

  methods: {
    require() {
      this.v$.require.$touch();
      if (this.v$.require.$error) {
        return;
      }

      this.reset();

      api.require(this.state.require).then((response) => {
        this.loading = false;
        this.showConsole(response.data.output);
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
      });
    },

    reset() {
      this.console = false;
      this.loading = true;
      this.errors = [];
    },

    showConsole(output) {
      this.console = true
      this.output = output;
    }
  }
}
</script>

<style scoped>
</style>