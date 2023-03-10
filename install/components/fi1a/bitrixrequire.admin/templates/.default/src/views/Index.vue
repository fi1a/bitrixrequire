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
    <div v-if="$root.canView()">
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col">
            <template v-if="$root.canEdit()">
              <PackageName :value="this.state.require.package" @update="v$.require.package.$model = $event" @enter="require"/>
              <PackageVersion :value="this.state.require.version" @update="v$.require.version.$model = $event" @enter="require"/>
              <input @click.prevent="require" :disabled="v$.require.$invalid || loading" type="button" :value="$t('add')" class="adm-btn-green fbr-package-require">
            </template>
          </div>
          <div class="fbr-col">
          </div>
        </div>
      </div>
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col white">
            <div class="fbr-suggest-packages">
              <h2>{{$t('addedTitle')}}</h2>
              <table class="fbr-package-list">
                <tr v-if="!installed.length">
                  <td class="fbr-empty-list" colspan="2">{{$t('empty')}}</td>
                </tr>
                <InstalledPackageItem v-for="packageItem in installed" :package="packageItem" @remove="remove($event)" />
              </table>
              <template v-if="all.length">
                <h2>{{$t('all')}}</h2>
                <table class="fbr-package-list">
                  <AllPackageItem v-for="packageItem in all" :package="packageItem" @remove="remove($event)" />
                </table>
              </template>
            </div>
          </div>
          <div class="fbr-col white">
            <div v-if="console === true">
              <div class="fbr-console">
                <span>&gt;&gt;&gt;</span><br><br>
                <div v-html="output"></div>
                <span>&lt;&lt;&lt;</span><br>
              </div>
              <input class="fbr-clear-console" type="button" v-on:click="console = false" :value="$t('hide')">
            </div>

            <div v-if="console === false && suggestWithoutInstalled.length" class="fbr-suggest-packages">
              <h2>{{$t('suggestsTitle')}}</h2>
              <table class="fbr-package-list">
                <SuggestPackageItem v-for="packageItem in suggestWithoutInstalled" :package="packageItem" @require="doRequire($event)" />
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="fbr-group">
        <div class="fbr-row2">
          <div class="fbr-col">
          </div>
          <div class="fbr-col fbr-text-align-right">
            <template v-if="$root.canEdit()">
              <input @click.prevent="update" type="button" :value="$t('update')" class="fbr-btn-update">
              <input @click.prevent="install" type="button" :value="$t('install')" class="fbr-btn-install">
            </template>
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
import InstalledPackageItem from "@/components/InstalledPackageItem.vue";
import AllPackageItem from "@/components/AllPackageItem.vue";
import SuggestPackageItem from "@/components/SuggestPackageItem.vue";
import Spinner from "@/components/Spinner.vue";
import api from "./../api/api";

export default {
  name: 'Index',

  components: {PackageName, PackageVersion, Spinner, InstalledPackageItem, AllPackageItem, SuggestPackageItem},

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
      output: '',
      installed: [],
      all: [],
      suggest: []
    }
  },

  mounted() {
    if (!this.$root.canView()) {
      this.loading = false;
      this.errors = [{message: this.$t('noRights')}];

      return;
    }

    this.show();
  },

  computed: {
    suggestWithoutInstalled() {
      let suggest = [];

      this.suggest.forEach((packageItem) => {
        let inInstalled = false;

        this.all.forEach((packageItemInstalled) => {
          if (packageItem.package === packageItemInstalled.package) {
            inInstalled = true;
          }
        })

        if (!inInstalled) {
          suggest.push(packageItem);
        }
      })

      return suggest;
    }
  },

  methods: {
    showSuggest() {
      api.suggest().then((response) => {
        this.suggest = response.data.suggest;
      }).catch((response) => {
        this.errors = response.errors;
      });
    },

    show() {
      this.loading = true;

      api.show().then((response) => {
        this.loading = false;
        this.installed = response.data.installed;
        this.all = response.data.all;

        this.showSuggest();
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
      });
    },

    require() {
      this.v$.require.$touch();
      if (this.v$.require.$error) {
        return;
      }

      this.doRequire(this.state.require.package, this.state.require.version)
    },

    doRequire(packageName, packageVersion = null) {
      this.reset();

      api.require({
        package: packageName,
        version: packageVersion,
      }).then((response) => {
        this.loading = false;
        this.showConsole(response.data.output);
        if (response.data.success) {
          this.state.require.package = '';
          this.state.require.version = '';
        }
        this.installed = response.data.installed;
        this.all = response.data.all;
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
        this.$scrollTop(document.getElementById('app').offsetTop);
      });
    },

    remove(packageName) {
      this.loading = true;

      api.remove(packageName).then((response) => {
        this.loading = false;
        this.showConsole(response.data.output);
        this.installed = response.data.installed;
        this.all = response.data.all;
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
        this.$scrollTop(document.getElementById('app').offsetTop);
      });
    },

    update() {
      this.loading = true;

      api.update().then((response) => {
        this.loading = false;
        this.showConsole(response.data.output);
        this.installed = response.data.installed;
        this.all = response.data.all;
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
        this.$scrollTop(document.getElementById('app').offsetTop);
      });
    },

    install() {
      this.loading = true;

      api.install().then((response) => {
        this.loading = false;
        this.showConsole(response.data.output);
        this.installed = response.data.installed;
        this.all = response.data.all;
      }).catch((response) => {
        this.errors = response.errors;
        this.loading = false;
        this.$scrollTop(document.getElementById('app').offsetTop);
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