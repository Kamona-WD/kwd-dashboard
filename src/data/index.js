import pkg from '../../package.json'
import home from './pages/home'
import blank from './pages/blank'
import tables from './pages/tables'
import formElements from './pages/form-elements'
import navigationLinks from './navigationLinks'

export default {
    title: 'K-WD Dashboard',

    banner: `<!--\n * ${pkg.name}: ${pkg.description}\n * version: v${pkg.version}\n * Author: ${pkg.author.name} <${pkg.author.email}>\n * Homepage: ${pkg.homepage}\n * Licensed under ${pkg.license}: ${pkg.repository.url}/blob/main/License.md \n-->`,

    navigationLinks,

    pages: {
        home,
        blank,
        tables,
        formElements,
    },
}
