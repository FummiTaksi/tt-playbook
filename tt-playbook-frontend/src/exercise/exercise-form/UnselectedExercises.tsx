import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp'
import { List, ListItem, ListItemText, styled } from '@mui/material'

interface Props {
  exercises: Exercise[]
  onSelectExercise: (exercise: Exercise) => void
}

const MyStyledListItem = styled(ListItem)`
  width: 20%;
`

export const UnselectedExercises = ({
  exercises,
  onSelectExercise,
}: Props): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <List>
      {exercises.map((exercise) => {
        return (
          <MyStyledListItem
            key={exercise.id}
            secondaryAction={
              <IconButton onClick={() => onSelectExercise(exercise)}>
                {t('unselectedExerciseList.select')}
                <AddCircleOutlineSharpIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={exercise.title.getValue(i18n.language)}
            ></ListItemText>
          </MyStyledListItem>
        )
      })}
    </List>
  )
}
