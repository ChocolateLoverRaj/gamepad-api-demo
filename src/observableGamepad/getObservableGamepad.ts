import Observable from 'observables/lib/Observable'
import wrapGetObservable from 'observables/lib/wrapGetObservable/wrapGetObservable'
import rafLoop from 'raf-loop'

const getObservableGamepad = (gamepadIndex: number): Observable<Gamepad | null> => wrapGetObservable({
  getValue: () => navigator.getGamepads()[gamepadIndex],
  getInternalObserve: triggerUpdate => {
    let previousTimestamp: number | undefined
    const loop = rafLoop(() => {
      const timestamp = navigator.getGamepads()[gamepadIndex]?.timestamp
      const shouldTriggerUpdate = timestamp !== undefined
        ? previousTimestamp === undefined || timestamp > previousTimestamp
        : previousTimestamp !== undefined
      if (shouldTriggerUpdate) {
        triggerUpdate()
      }
      previousTimestamp = timestamp
    })

    return {
      add: () => {
        loop.start()
      },
      remove: () => {
        loop.stop()
      }
    }
  }
})

export default getObservableGamepad
