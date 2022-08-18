import i18n from 'i18next'
import en from './translations/en.json'
import fi from './translations/fi.json'
import {initReactI18next} from "react-i18next";


const resources = {
    en: {
        translation: en
    },
    fi: {
        translation: fi
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export { i18n }