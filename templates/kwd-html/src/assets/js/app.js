import Alpine from 'alpinejs'

Alpine.data('mainState', () => {
  let lastScrollTop = 0

  const init = function () {
    this.$refs.loading.remove()

    window.addEventListener('scroll', () => {
      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        // downscroll
        this.scrollingDown = true
        this.scrollingUp = false
      } else {
        // upscroll
        this.scrollingDown = false
        this.scrollingUp = true
        if (st == 0) {
          //  reset
          this.scrollingDown = false
          this.scrollingUp = false
        }
      }
      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    })
  }

  const getTheme = () => {
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const setTheme = (value) => {
    window.localStorage.setItem('dark', value)
  }

  return {
    init,
    isDark: getTheme(),
    toggleTheme() {
      this.isDark = !this.isDark
      setTheme(this.isDark)
    },
    isRTL: false,
    isSidebarOpen: window.innerWidth <= 1280 ? false : true,
    isMobileSubMenuOpen: false,
    watchScreen() {
      if (window.innerWidth <= 1280) {
        this.isSidebarOpen = false
      }
      if (window.innerWidth >= 1280) {
        this.isSidebarOpen = true
      }
    },
    scrollingDown: false,
    scrollingUp: false,
  }
})

window.Alpine = Alpine

Alpine.start()
