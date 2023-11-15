import 'server-only'

const dictionaries = {
    en: () => import('../i18n/en.json').then((module) => module.default),
    de: () => import('../i18n/de.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
