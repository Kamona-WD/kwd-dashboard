import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'

window.Alpine = Alpine

Alpine.data('setup', () => {
    const getTheme = () => {
        if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
        }

        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const setTheme = (value) => {
        window.localStorage.setItem('dark', value)
    }

    const getColor = () => {
        if (window.localStorage.getItem('color')) {
            return window.localStorage.getItem('color')
        }
        return 'cyan'
    }

    const setColors = (color) => {
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
        //
    }

    const updateBarChart = (on) => {
        const data = {
            data: randomData(),
            backgroundColor: 'rgb(207, 250, 254)',
        }
        if (on) {
            barChart.data.datasets.push(data)
            barChart.update()
        } else {
            barChart.data.datasets.splice(1)
            barChart.update()
        }
    }

    const updateDoughnutChart = (on) => {
        const data = random()
        const color = 'rgb(207, 250, 254)'
        if (on) {
            doughnutChart.data.labels.unshift('Seb')
            doughnutChart.data.datasets[0].data.unshift(data)
            doughnutChart.data.datasets[0].backgroundColor.unshift(color)
            doughnutChart.update()
        } else {
            doughnutChart.data.labels.splice(0, 1)
            doughnutChart.data.datasets[0].data.splice(0, 1)
            doughnutChart.data.datasets[0].backgroundColor.splice(0, 1)
            doughnutChart.update()
        }
    }

    const updateLineChart = () => {
        lineChart.data.datasets[0].data.reverse()
        lineChart.update()
    }

    return {
        loading: true,
        isDark: getTheme(),
        toggleTheme() {
            this.isDark = !this.isDark
            setTheme(this.isDark)
        },
        setLightTheme() {
            this.isDark = false
            setTheme(this.isDark)
        },
        setDarkTheme() {
            this.isDark = true
            setTheme(this.isDark)
        },
        color: getColor(),
        selectedColor: 'cyan',
        setColors,
        toggleSidbarMenu() {
            this.isSidebarOpen = !this.isSidebarOpen
        },
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
        updateBarChart,
        updateDoughnutChart,
        updateLineChart,
    }
})

Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineFocus)

Alpine.start()
