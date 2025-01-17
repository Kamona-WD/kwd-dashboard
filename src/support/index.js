export const getCssColor = (color) => {
    return getComputedStyle(document.body).getPropertyValue(`--color-${color}`).trim()
}

export const getScheme = () => {
    if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
