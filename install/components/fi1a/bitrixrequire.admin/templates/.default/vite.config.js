import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/bitrix/components/fi1a/bitrixrequire.admin/templates/.default/dist/`,
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
