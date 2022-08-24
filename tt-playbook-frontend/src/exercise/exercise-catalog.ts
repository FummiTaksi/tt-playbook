import { Exercise } from './exercise'
import { makeAutoObservable } from 'mobx'

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
