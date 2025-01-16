import { twMerge } from 'tailwind-merge'

export default {
    eq: function (v1, v2) {
        return v1 === v2
    },
    notEq: function (v1, v2) {
        return v1 != v2
    },
    btn: function (context) {
        const {
            variant = '',
            icon = null,
            srText = '',
            startIcon = null,
            endIcon = null,
            classes = '',
            attrs = '',
            iconSizeClasses = 'w-6 h-6',
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
                    ' bg-transparent text-gray-700 focus:ring-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-0'
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

        const iconSpan = (icon) => `<span aria-hidden="true" class="iconify ${icon} ${iconSizeClasses}"></span>`

        const srt = srText ? `<span class="sr-only">${srText}</span>` : ''
        const i = icon ? iconSpan(icon) : ''
        const si = startIcon ? iconSpan(startIcon) : ''
        const ei = endIcon ? iconSpan(endIcon) : ''

        const tag = href ? 'a' : 'button'

        return `
            <${tag} ${href ? 'href="' + href + '"' : ''} ${attrs} type="${type}" class="${twMerge(baseClasses, classes)}">
                ${srt}
                ${i}
                ${si}
                ${text}
                ${context.fn?.()}
                ${ei}
            </${tag}>
        `
    },
}
