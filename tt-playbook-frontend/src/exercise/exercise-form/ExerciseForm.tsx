import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { UnselectedExercises } from './UnselectedExercises'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'

interface Props {
  exerciseCatalog: ExerciseCatalog
  exercises: Exercise[]
}

export interface SelectableExercise extends Exercise {
  selected: boolean
}

export class ExerciseCatalog {
  exercises: Exercise[] = []

  constructor () {
    makeAutoObservable(this)
  }

  add (exercise: Exercise): void {
    const newExercises = [...this.exercises, exercise]

    this.exercises = newExercises
  }
}

export const ExerciseForm = observer(({ exercises, exerciseCatalog }: Props): ReactElement => {
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
      <p>You have selected {exerciseCatalog.exercises.length} exercises</p>
    </div>
  )
})
