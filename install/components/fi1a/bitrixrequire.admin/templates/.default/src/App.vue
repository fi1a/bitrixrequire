<template>
  <div>
    <div class="fbr-group">
      <div class="fbr-row2">
        <div class="fbr-col">
          <div class="fbr-package-name">
            <input type="text" tabindex="1" placeholder="Название пакета" autocomplete="off">
            <div class="suggest">
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
            </div>
          </div>
          <div class="fbr-package-version">
            <input type="text" tabindex="2" placeholder="Версия пакета" autocomplete="off">
          </div>
          <input type="button" v-on:click="console = true"  value="Добавить" class="adm-btn-green fbr-package-require">
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

              <span style="color: white">&gt;&gt;&gt;</span><br><br>

              <span style="color:green;">./composer.json has been updated</span><br>
              <span style="color:green;">Running composer update fi1a/format</span><br>
              <span style="color:green;">Loading composer repositories with package information</span><br>
              <span style="color:green;">Info from https://repo.packagist.org: #StandWithUkraine</span><br>
              <span style="color:green;">Updating dependencies</span><br>
              <span style="color:green;">Lock file operations: 3 installs, 0 updates, 0 removals</span><br>
              - Locking <span style="color:green;">fi1a/collection</span> (<span style="color:yellow;">2.0.5</span>)<br>
              - Locking <span style="color:green;">fi1a/format</span> (<span style="color:yellow;">2.0.0</span>)<br>
              - Locking <span style="color:green;">fi1a/tokenizer</span> (<span style="color:yellow;">1.1.5</span>)<br>
              <span style="color:green;">Writing lock file</span><br>

              <br>
              <span style="color: white">&lt;&lt;&lt;</span><br><br>

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
</template>

<script>
export default {
  data() {
    return {
      console: false
    }
  }
}
</script>

<style scoped>
.fbr-group {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.fbr-row2 {
  display: table-row;
}

.fbr-col {
  width: 50%;
  max-width: 50%;
  min-width: 50%;

  background-color: #f5f9f9;
  border: 1px solid;
  border-color: #c4ced2 #dce7ed #dce7ed;
  padding: 20px;
  display: table-cell;
  vertical-align: top;
}

.fbr-col.white {
  background: #ffffff;
}

.fbr-console {
  background: #000;
  padding: 20px;
  border-radius: 10px;
}

.fbr-package-name, .fbr-package-version {
  float: left;
  position: relative;
}

.fbr-package-name {
  width: 60%;
  margin-right: 1%;
}

.fbr-package-version {
  width: 38%;
}

.fbr-package-version:after {
  clear: both;
}

.adm-workarea input.adm-btn-green.fbr-package-require {
  margin-top: 10px;
}

.adm-workarea .fbr-package-name input[type="text"],
.adm-workarea .fbr-package-version input[type="text"] {
  position: relative;
  padding: 0 50px 0 15px;
  height: 35px;
  width: 100%;
  margin: 4px 1px;
  font: 15px/30px "Helvetica Neue",Arial,Helvetica,sans-serif;
  -webkit-transition: background .3s;
  transition: background .3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  z-index: 1;
  background: #fff;
  border: 1px solid;
  border-color: #87919c #959ea9 #9ea7b1 #959ea9;
  color: #000;
  display: inline-block;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  border-radius: 2px;
  box-shadow: none;
  outline: none;
  font-size: 13px;
}

.fbr-package-list {
  width: 100%;
}

.fbr-package-remove-container,
.fbr-package-add-container {
  width: 1px;
  padding-left: 20px;
}

.fbr-package-item-name {
  font-weight: bold;
}

.fbr-package-item-name, .fbr-package-item-description {
  margin-bottom: 10px;
}

.fbr-package-list tr td {
  border-bottom: 1px solid #c4ced2;
  padding: 20px 0;
}

.fbr-package-list tr:last-child td {
  border-bottom: none;
}

.adm-workarea input[type="button"].fbr-clear-console {
  margin-top: 20px;
  float: right;
}

.fbr-clear-console:after {
  clear: both;
}

.suggest {
  position: absolute;
  z-index: 1000;
  background: white;
  width: 100%;
  border: 1px solid #ccc;
  max-height: 120px;
  overflow-y: auto;
}

.suggest ul {
  padding: 10px 20px;
  margin: 0;
}

.suggest ul li {
  list-style: none;
  padding: 5px 0;
  cursor: pointer;
}

.suggest ul li:hover {
  color: #2675d7;
}

.fbr-suggest-packages {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 20px;
}

</style>
