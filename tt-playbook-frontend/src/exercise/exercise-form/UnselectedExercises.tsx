import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
import { List, ListItem, ListItemText } from '@mui/material'

interface Props {
  exercises: Exercise[]
  onSelectExercise: (exercise: Exercise) => void
}

export const UnselectedExercises = ({
  exercises,
  onSelectExercise,
}: Props): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <List>
      {exercises.map((exercise) => {
        return (
          <ListItem
            key={exercise.id}
            secondaryAction={
              <IconButton
                onClick={() => onSelectExercise(exercise)}
                edge={'end'}
              >
                {t('unselectedExerciseList.select')}
                <AddCircleOutlineSharpIcon />
              </IconButton>
            }
            alignItems={'flex-start'}
            sx={{ width: '20%' }}
          >
            <ListItemText
              primary={exercise.title.getValue(i18n.language)}
            ></ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}
