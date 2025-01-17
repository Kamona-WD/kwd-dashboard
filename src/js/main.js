import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'

window.Alpine = Alpine

Alpine.store('settings', {
    panel: {
        isOpen: false,

        open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },
    },

    darkMode: {
        value: false,
        setValue(value) {
            this.value = value
            window.localStorage.setItem('dark', value)
            document.dispatchEvent(new CustomEvent('scheme:changed', {}))
        },
        getValue() {
            if (window.localStorage.getItem('dark')) {
                return JSON.parse(window.localStorage.getItem('dark'))
            }
            return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        },
        toggle() {
            this.value = !this.value
            this.setValue(this.value)
        },
    },

    colors: {
        selectedColor: 'cyan',

        availableColors: ['cyan', 'teal', 'green', 'fuchsia', 'blue', 'violet'],

        getColor() {
            if (window.localStorage.getItem('color')) {
                return window.localStorage.getItem('color')
            }
            return this.selectedColor
        },

        setColor(color) {
            const root = document.documentElement
            root.style.setProperty('--color-primary', `var(--color-${color})`)
            root.style.setProperty('--color-primary-50', `var(--color-${color}-50)`)
            root.style.setProperty('--color-primary-100', `var(--color-${color}-100)`)
            root.style.setProperty('--color-primary-light', `var(--color-${color}-light)`)
            root.style.setProperty('--color-primary-lighter', `var(--color-${color}-lighter)`)
            root.style.setProperty('--color-primary-dark', `var(--color-${color}-dark)`)
            root.style.setProperty('--color-primary-darker', `var(--color-${color}-darker)`)
            this.selectedColor = color
            window.localStorage.setItem('color', color)

            document.dispatchEvent(new CustomEvent('colors:changed', {}))
        },
    },

    init() {
        this.darkMode.value = this.darkMode.getValue()
        this.colors.setColor(this.colors.getColor())
    },
})

Alpine.data('setup', () => {
    return {
        init() {
            this.$refs.loading.classList.add('hidden')
        },
        loading: true,
        isSidebarOpen: true,
        isSettingsPanelOpen: false,
        openSettingsPanel() {
            this.isSettingsPanelOpen = true
            this.$nextTick(() => {
                this.$refs.settingsPanel.focus()
            })
        },
        isNotificationsPanelOpen: false,
        openNotificationsPanel() {
            this.isNotificationsPanelOpen = true
            this.$nextTick(() => {
                this.$refs.notificationsPanel.focus()
            })
        },
        isSearchPanelOpen: false,
        openSearchPanel() {
            this.isSearchPanelOpen = true
            this.$nextTick(() => {
                this.$refs.searchInput.focus()
            })
        },
        isMobileSubMenuOpen: false,
        openMobileSubMenu() {
            this.isMobileSubMenuOpen = true
            this.$nextTick(() => {
                this.$refs.mobileSubMenu.focus()
            })
        },
        isMobileMainMenuOpen: false,
        openMobileMainMenu() {
            this.isMobileMainMenuOpen = true
            this.$nextTick(() => {
                this.$refs.mobileMainMenu.focus()
            })
        },
    }
})

Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineFocus)
