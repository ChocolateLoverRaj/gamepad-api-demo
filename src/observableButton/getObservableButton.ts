import Observable from 'observables/lib/Observable'
import createComputedObservable from '../createComputedObservable'

const getObservableButton = (observableGamepad: Observable<Gamepad | null>, buttonIndex: number): Observable<GamepadButton | undefined> => createComputedObservable(observe => {
  return observe(observableGamepad)?.buttons[buttonIndex]
})

export default getObservableButton
