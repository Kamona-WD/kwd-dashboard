import ApexCharts from 'apexcharts'
import { getCssColor, getScheme } from '@/support/index.js'

window.ApexCharts = ApexCharts

const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

document.addEventListener('alpine:init', () => {
    const baseChartOptions = {
        theme: {
            mode: Alpine.store('settings.darkMode.value') ? 'dark' : 'light',
        },
        colors: [getCssColor('primary-light'), getCssColor('violet-light')],
        chart: {
            background: 'transparent',
        },
    }

    const onInit = (chart) => {
        document.addEventListener('scheme:changed', () => {
            chart.updateOptions({
                theme: {
                    mode: getScheme() ? 'dark' : 'light',
                },
            })
        })

        document.addEventListener('colors:changed', () => {
            chart.updateOptions({
                colors: [getCssColor('primary-light'), getCssColor('violet-light')],
            })
        })
    }

    Alpine.data('barChart', (el) => {
        let c = new ApexCharts(el, {
            ...baseChartOptions,
            chart: {
                ...baseChartOptions.chart,
                type: 'bar',
                height: '100%',
                width: '100%',
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
            },
            series: [
                {
                    name: 'A',
                    data: getRandomChartData(12),
                },
                {
                    name: 'B',
                    data: getRandomChartData(12),
                },
            ],
            grid: {
                show: false,
            },
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false,
                },
                axisBorder: {
                    show: false,
                },
                categories: months,
            },
            yaxis: {
                labels: {
                    padding: 4,
                },
            },
            legend: {
                show: false,
            },
        })

        c.render()

        return {
            init() {
                onInit(c)
            },
        }
    })

    Alpine.data('doughnutChart', (el) => {
        const c = new ApexCharts(el, {
            ...baseChartOptions,
            series: [30, 70],
            chart: {
                ...baseChartOptions.chart,
                type: 'donut',
                height: '100%',
                width: '100%',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: { show: false },
            comparedResult: [3, 7],
            labels: ['A', 'B'],
            stroke: { width: 0 },
            grid: {
                padding: {
                    right: -20,
                    bottom: -8,
                    left: -20,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                offsetY: 15,
                            },
                            value: {
                                offsetY: -20,
                                formatter(val) {
                                    return `${parseInt(val)}%`
                                },
                            },
                            total: {
                                show: true,
                                label: 'Sales',
                                formatter() {
                                    return '30%'
                                },
                            },
                        },
                    },
                },
            },
        })

        c.render()

        return {
            init() {
                onInit(c)
            },
        }
    })

    Alpine.data('lineChart', (el) => {
        let c = new ApexCharts(el, {
            ...baseChartOptions,
            series: [
                {
                    name: 'A',
                    data: getRandomChartData(7),
                },
                {
                    name: 'B',
                    data: getRandomChartData(7),
                },
            ],
            legend: {
                position: 'top',
            },
            chart: {
                ...baseChartOptions.chart,
                height: '100%',
                width: '100%',
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2025', '2/11/2025', '3/11/2025', '4/11/2025', '5/11/2025', '6/11/2025'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        })

        c.render()

        return {
            init() {
                onInit(c)
            },
        }
    })

    Alpine.data('activeUsersChart', (el) => {
        let randomUserCount = 0

        const usersCount = document.getElementById('usersCount')

        const activeUsersCount = getRandomChartData(30)

        let c = new ApexCharts(el, {
            ...baseChartOptions,
            chart: {
                ...baseChartOptions.chart,
                type: 'bar',
                fontFamily: 'inherit',
                height: '100%',
                width: '100%',
                sparkline: {
                    enabled: true,
                },
                animations: {
                    enabled: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
            },
            series: [
                {
                    name: 'Users',
                    data: activeUsersCount,
                },
            ],
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false,
                },
                axisBorder: {
                    show: false,
                },
                type: 'datetime',
            },
            yaxis: {
                labels: {
                    padding: 4,
                },
            },
            labels: [
                '2020-06-20',
                '2020-06-21',
                '2020-06-22',
                '2020-06-23',
                '2020-06-24',
                '2020-06-25',
                '2020-06-26',
                '2020-06-27',
                '2020-06-28',
                '2020-06-29',
                '2020-06-30',
                '2020-07-01',
                '2020-07-02',
                '2020-07-03',
                '2020-07-04',
                '2020-07-05',
                '2020-07-06',
                '2020-07-07',
                '2020-07-08',
                '2020-07-09',
                '2020-07-10',
                '2020-07-11',
                '2020-07-12',
                '2020-07-13',
                '2020-07-14',
                '2020-07-15',
                '2020-07-16',
                '2020-07-17',
                '2020-07-18',
                '2020-07-19',
            ],
            legend: {
                show: false,
            },
        })

        c.render()

        return {
            init() {
                const fakeUsersCount = () => {
                    randomUserCount = getRandomChartDataItem()
                    activeUsersCount.shift()
                    activeUsersCount.push(Math.floor(Math.random() * (100 - 40) + 40))

                    c.update()
                    usersCount.innerText = randomUserCount
                }

                //   setInterval(() => {
                //     fakeUsersCount()
                //   }, 1000)

                onInit(c)
            },
        }
    })
})
