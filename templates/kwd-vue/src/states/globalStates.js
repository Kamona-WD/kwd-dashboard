import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark()

export const toggleDark = useToggle(isDark)

export const isRTL = ref(false)

export const isMobileSubMenuOpen = ref(false)

export const isSidebarOpen = ref(window.innerWidth <= 1280 ? false : true)

export const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

export const handleResize = () => {
  if (window.innerWidth <= 1280) {
    isSidebarOpen.value = false
  }
  if (window.innerWidth >= 1280) {
    isSidebarOpen.value = true
  }
}

export const scrollingDown = ref(false)

export const scrollingUp = ref(false)

let lastScrollTop = 0

export const handleScroll = () => {
  let st = window.pageYOffset || document.documentElement.scrollTop
  if (st > lastScrollTop) {
    // downscroll
    scrollingDown.value = true
    scrollingUp.value = false
  } else {
    // upscroll
    scrollingDown.value = false
    scrollingUp.value = true
    if (st == 0) {
      //  reset
      scrollingDown.value = false
      scrollingUp.value = false
    }
  }
  lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
}

export const isSearchPanelOpen = ref(false)
export const isSettingsPanelOpen = ref(false)
export const isNotificationsPanelOpen = ref(false)
