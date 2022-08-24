import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSelector = (): ReactElement => {
  const { t, i18n } = useTranslation()

  const changeLanguage = async (language: string): Promise<void> => {
    await i18n.changeLanguage(language)
  }
  return (
    <div>
      <button
        onClick={() => {
          void (async () => {
            await changeLanguage('en')
          })()
        }}
      >
        {t('languages.en')}
      </button>
      <button
        onClick={() => {
          void (async () => {
            await changeLanguage('fi')
          })()
        }}
      >
        {t('languages.fi')}
      </button>
    </div>
  )
}
