import React, { ReactElement } from 'react'
import { Exercise } from '../exercise'
import { UnselectedExercises } from './UnselectedExercises'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { SelectedExercises } from './SelectedExercises'

interface Props {
  exerciseCatalog: ExerciseCatalog
  exercises: Exercise[]
}

export class ExerciseCatalog {
  exercises: Exercise[] = []

  constructor() {
    makeAutoObservable(this)
  }

  add(exercise: Exercise): void {
    const newExercises = [...this.exercises, exercise]
    this.exercises = newExercises
  }

  remove(removedExercise: Exercise): void {
    const newExercises = this.exercises.filter(
      (exercise) => exercise.id !== removedExercise.id,
    )

    this.exercises = newExercises
  }
}

export const ExerciseForm = observer(
  ({ exercises, exerciseCatalog }: Props): ReactElement => {
    return (
      <div>
        <UnselectedExercises
          exercises={exercises}
          onSelectExercise={(exercise) => exerciseCatalog.add(exercise)}
        />
        <p>You have selected {exerciseCatalog.exercises.length} exercises</p>
        <SelectedExercises
          exercises={exerciseCatalog.exercises}
          onUnselectExercise={(exercise) => exerciseCatalog.remove(exercise)}
        />
      </div>
    )
  },
)
