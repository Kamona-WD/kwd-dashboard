export default function (Alpine) {
    Alpine.directive('dropdown', (el, { value, modifiers }) => {
        if (!value) handleRoot(Alpine, el)
        else if (value === 'trigger') handleTrigger(Alpine, el)
        else if (value === 'menu') handleMenu(Alpine, el, modifiers)
    })
}

function handleRoot(Alpine, el) {
    Alpine.bind(el, {
        'x-id'() {
            return ['dropdown-trigger', 'dropdown-menu']
        },
        'x-data'() {
            return {
                isOpen: false,
            }
        },
    })
}

function handleTrigger(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$id('dropdown-trigger')
        },
        '@click'() {
            this.isOpen = !this.isOpen
        },
        'aria-haspopup': 'true',
        ':aria-expanded'() {
            return this.isOpen.toString()
        },
    })
}

function handleMenu(Alpine, el, modifiers) {
    let positions = [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
    ]
    let placement = positions.find((i) => modifiers.includes(i))

    let defaultClasses = ''
    let transitionClasses = {
        'x-transition:enter': 'transition ease-out duration-200',
        'x-transition:enter-start': 'transform opacity-0 scale-95',
        'x-transition:enter-end': 'transform opacity-100 scale-100',
        'x-transition:leave': 'transition ease-in duration-75',
        'x-transition:leave-start': 'transform opacity-100 scale-100',
        'x-transition:leave-end': 'transform opacity-0 scale-95',
    }

    Alpine.bind(el, {
        class: `${defaultClasses}`,
        style: { display: 'none' },
        ':id'() {
            return this.$id('dropdown-menu')
        },
        [`x-anchor${placement ? '.' + placement : ''}.offset.10`]() {
            return document.getElementById(this.$id('dropdown-trigger'))
        },
        'x-show'() {
            return this.isOpen
        },
        '@click.outside'() {
            this.isOpen = false
        },
        ...transitionClasses,
    })
}
