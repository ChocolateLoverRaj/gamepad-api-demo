import wrapGetObservable from 'observables/lib/wrapGetObservable/wrapGetObservable'

const observableGamepads = wrapGetObservable<number>({
  getValue: () => navigator.getGamepads().length,
  getInternalObserve: triggerUpdate => {
    const listener: EventListener = () => triggerUpdate()
    return {
      add: () => {
        addEventListener('gamepadconnected', listener)
        addEventListener('gamepaddisconnected', listener)
      },
      remove: () => {
        removeEventListener('gamepadconnected', listener)
        removeEventListener('gamepaddisconnected', listener)
      }
    }
  }
})

export default observableGamepads
