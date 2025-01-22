import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineFocus from '@alpinejs/focus'
import AlpineAnchor from '@alpinejs/anchor'
import AlpineResize from '@alpinejs/resize'
import kwdPlugin from './plugin'

window.Alpine = Alpine

Alpine.plugin(kwdPlugin)
Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineFocus)
Alpine.plugin(AlpineAnchor)
Alpine.plugin(AlpineResize)
