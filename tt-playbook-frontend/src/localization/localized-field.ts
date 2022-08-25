export class LocalizedField {
  value_en: string
  value_fi: string

  public constructor(value_en: string, value_fi: string) {
    this.value_en = value_en
    this.value_fi = value_fi
  }

  public getValue(language: string): string {
    if (language === 'en') {
      return this.value_en
    }
    if (language === 'fi') {
      return this.value_fi
    }
    throw new Error('Unsupported language')
  }
}
