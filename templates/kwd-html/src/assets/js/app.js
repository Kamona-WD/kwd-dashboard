document.addEventListener('alpine:init', () => {
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

  Alpine.data('sidebarNavigation', () => {
    return {
      navigationSidebarLinks: [
        {
          label: 'Home',
          href: 'index.html',
          icon: 'home',
          isActive() {
            return window.location.pathname.endsWith('/') || window.location.pathname == '/index.html'
          },
        },
        {
          label: 'Pages',
          icon: 'file',
          isActive() {
            return !!this.subLinks.some((i) => i.href == window.location.pathname)
          },
          subLinks: [
            {
              label: '404',
              href: '#',
              isActive() {
                return window.location.pathname == '/404.html'
              },
            },
            {
              label: '500',
              href: '#',
              isActive() {
                return window.location.pathname == '/500.html'
              },
            },
            {
              label: 'Blank',
              href: '/blank.html',
              isActive() {
                return window.location.pathname == '/blank.html'
              },
            },
            {
              label: 'Profile',
              href: '#',
              isActive() {
                return window.location.pathname == '/profile.html'
              },
            },
            {
              label: 'Pricing',
              href: '#',
              isActive() {
                return window.location.pathname == '/pricing.html'
              },
            },
          ],
        },
        {
          label: 'Authentication',
          icon: 'user',
          isActive() {
            return this.subLinks.some((i) => i.label == window.location.pathname)
          },
          subLinks: [
            {
              label: 'Sign up',
              href: '#',
              isActive() {
                return window.location.pathname == '/sign-up.html'
              },
            },
            {
              label: 'Sign in',
              href: '#',
              isActive() {
                return window.location.pathname == '/sign-in.html'
              },
            },
            {
              label: 'Forgot password',
              href: '#',
              isActive() {
                return window.location.pathname == '/forgot-password.html'
              },
            },
            {
              label: 'Reset password',
              href: '#',
              isActive() {
                return window.location.pathname == '/reset-password.html'
              },
            },
          ],
        },
      ],
    }
  })
})
