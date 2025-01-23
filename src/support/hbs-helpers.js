import { twMerge } from 'tailwind-merge'
import { baseUrl } from '.'

export default {
    eq: function (v1, v2) {
        return v1 === v2
    },
    notEq: function (v1, v2) {
        return v1 != v2
    },
    baseUrl: function (url = '') {
        if (url == '#') return '#'

        if (url == '/') {
            url = ''
        }

        return `${baseUrl}${url}`
    },

    // Very naive but works.
    btn: function (context) {
        const {
            variant = '',
            icon = null,
            srText = '',
            startIcon = null,
            endIcon = null,
            className = null,
            attrs = '',
            iconClasses = '',
            iconSizeClasses = 'w-6 h-6',
            iconAttrs = '',
            text = '',
            type = 'button',
            href = null,
        } = context.hash

        let baseClasses =
            'inline-flex items-center justify-center gap-2 rounded-md transition-colors font-medium select-none focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark disabled:cursor-not-allowed disabled:opacity-50 '

        switch (variant) {
            case 'black':
                baseClasses += ' bg-black text-gray-200 hover:bg-gray-900 focus:ring-black'
                break
            case 'secondary':
                baseClasses +=
                    ' bg-gray-100 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-black dark:bg-gray-900 dark:text-gray-400'
                break
            case 'transparent':
                baseClasses +=
                    ' bg-transparent text-gray-700 focus:ring-primary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark'
                break
            case 'primary-light':
                baseClasses +=
                    ' bg-primary-50 text-primary-lighter hover:bg-primary-100 hover:text-primary focus:ring-primary-lighter dark:bg-dark dark:hover:bg-primary-dark dark:hover:text-light'
                break

            default:
                baseClasses += ' bg-primary text-white hover:bg-primary-dark focus:ring-primary'
                break
        }

        if (icon) {
            baseClasses += ' p-2'
        } else {
            baseClasses += ' px-4 py-2'
        }

        const iconSpan = (icon) =>
            `<span aria-hidden="true" class="iconify ${icon} ${iconSizeClasses} ${iconClasses}" ${iconAttrs}></span>`

        const srt = srText ? `<span class="sr-only">${srText}</span>` : ''
        const i = icon ? iconSpan(icon) : ''
        const si = startIcon ? iconSpan(startIcon) : ''
        const ei = endIcon ? iconSpan(endIcon) : ''

        const tag = href ? 'a' : 'button'

        return `
            <${tag} ${href ? 'href="' + href + '"' : ''} ${attrs} type="${type}" class="${twMerge(baseClasses, className)}">
                ${srt}
                ${i}
                ${si}
                ${text}
                ${context.fn?.()}
                ${ei}
            </${tag}>
        `
    },
    'base-card': function (context) {
        const { tag = 'div', attrs = '', className = '' } = context.hash

        let baseClasses = 'rounded-md border border-gray-300 bg-white dark:bg-darker dark:border-primary-darker'

        return `
            <${tag} class="${twMerge(baseClasses, className)}" ${attrs}>
                ${context.fn?.()}
            </${tag}>
        `
    },
}
