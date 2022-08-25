import { Exercise } from './exercise/exercise'
import { LocalizedField } from './localization/localized-field'

export const exercises: Exercise[] = [
  {
    id: '1',
    title: new LocalizedField('Falkenberg', 'Stellan'),
    description: new LocalizedField(
      'Legendary footwork exercise',
      'Perinteinen jalkatyöharjoitus',
    ),
  },
  {
    id: '2',
    title: new LocalizedField('2-2', '2-2'),
    description: new LocalizedField(
      'Great warmup exercise',
      'Hyvä lämmittelykuvio',
    ),
  },
]
