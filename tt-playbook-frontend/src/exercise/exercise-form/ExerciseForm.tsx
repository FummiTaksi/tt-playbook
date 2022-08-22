import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { UnselectedExercises } from './UnselectedExercises'

interface Props {
  exercises: Exercise[]
}

export interface SelectableExercise extends Exercise {
  selected: boolean
}

export const ExerciseForm = ({ exercises }: Props): ReactElement => {
  const selectableExercises: SelectableExercise[] = exercises.map(
    (exercise) => {
      return {
        ...exercise,
        selected: false,
      }
    },
  )

  return (
    <div>
      <UnselectedExercises exercises={selectableExercises} />
    </div>
  )
}
