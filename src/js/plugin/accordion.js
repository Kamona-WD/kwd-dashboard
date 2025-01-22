export default function (Alpine) {
    Alpine.directive('accordion', (el, { value }) => {
        if (value === 'item') handleItem(Alpine, el)
        else if (value === 'item-trigger') handleItemTrigger(Alpine, el)
        else if (value === 'item-content') handleItemContent(Alpine, el)
        else handleRoot(Alpine, el)
    }).before('bind')
}

function handleRoot(Alpine, el) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                activeAccordion: null,
                setActiveAccordion(accordion) {
                    this.activeAccordion = this.activeAccordion == accordion ? null : accordion
                },
            }
        },
    })
}

function handleItem(Alpine, el) {
    Alpine.bind(el, {
        'x-id'() {
            return ['accordion-item']
        },
        ':id'() {
            return this.$id('accordion-item')
        },
        'x-data'() {
            return {
                accordion: this.$id('accordion-item'),
                get active() {
                    return this.accordion === this.activeAccordion
                },
            }
        },
    })
}

function handleItemTrigger(Alpine, el) {
    Alpine.bind(el, {
        '@click'() {
            this.setActiveAccordion(this.accordion)
        },
    })
}

function handleItemContent(Alpine, el) {
    Alpine.bind(el, {
        style: { display: 'none' },
        'x-show'() {
            return this.activeAccordion === this.accordion
        },
    })
}
