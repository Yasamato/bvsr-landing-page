/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '../public/locales/de/common.json'
import type footer from '../public/locales/de/footer.json'
import type members from '../public/locales/de/members.json'

interface I18nNamespaces {
    common: typeof common
    footer: typeof footer
    members: typeof members
}

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: I18nNamespaces
    }
}
