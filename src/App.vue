<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from './@layouts/utils'
import { usePopupStore } from '@/store/popupStore'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, isAppRtl, handleSkinChanges } = useThemeConfig()

const { global } = useTheme()

// let timer = ref<NodeJS.Timeout | null>(null)

const popups = reactive({
  alert: false,
  message: '',
  type: '',
})

const popupStore = usePopupStore()
const timer = ref<NodeJS.Timeout | null>(null)

watch(popupStore.message, newVal => {
  popups.alert = newVal.alert
  popups.message = newVal.message
  popups.type = newVal.type
  if (timer.value)
    clearTimeout(timer.value)

  timer.value = setTimeout(() => {
    popups.alert = false
    timer.value = null
  }, 2000)
}, {
  deep: true,
})

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
handleSkinChanges()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>

  <div
    class="alert"
    :class="[popups.alert ? 'popup_display' : '']"
  >
    <VAlert :color="popups.type">
      {{ popups.message }}
    </VAlert>
  </div>
</template>
