import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'

export const LanguageSelector = (): ReactElement => {
  const { t, i18n } = useTranslation()

  const changeLanguage = async (language: string): Promise<void> => {
    await i18n.changeLanguage(language)
  }
  return (
    <div>
      <Button
        variant={'contained'}
        onClick={() => {
          void (async () => {
            await changeLanguage('en')
          })()
        }}
      >
        {t('languages.en')}
      </Button>
      <Button
        variant={'contained'}
        onClick={() => {
          void (async () => {
            await changeLanguage('fi')
          })()
        }}
      >
        {t('languages.fi')}
      </Button>
    </div>
  )
}
