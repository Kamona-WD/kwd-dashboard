import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'
import kwdPlugin from './plugin'

window.Alpine = Alpine

Alpine.plugin(kwdPlugin)
Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineFocus)
