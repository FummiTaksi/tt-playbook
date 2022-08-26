import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp'
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'

interface Props {
  exercises: Exercise[]
  onUnselectExercise: (index: number) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const SelectedExercises = ({
  exercises,
  onUnselectExercise,
}: Props): ReactElement => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <p>
        {t('selectedExerciseList.amountOfExercises', {
          amount: exercises.length,
        })}
      </p>
      <ul>
        {exercises.map((exercise, index) => {
          return (
            <Container key={`${index}-exerciseId-${exercise.id}`}>
              <Typography>{exercise.title.getValue(i18n.language)}</Typography>
              <IconButton onClick={() => onUnselectExercise(index)}>
                {t('selectedExerciseList.unselect')}
                <DeleteOutlineSharpIcon />
              </IconButton>
            </Container>
          )
        })}
      </ul>
    </div>
  )
}
