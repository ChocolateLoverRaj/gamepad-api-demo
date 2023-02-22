import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import reactObserver from 'observables/lib/reactObserver/reactObserver'
import GamepadOrNull from '../gamepadOrNull/GamepadOrNull'
import observableGamepads from '../observableGamepads/observableGamepads'

const Gamepads = reactObserver(observe => {
  const gamepads = observe(observableGamepads)
  const { ref, focusKey } = useFocusable()

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        {navigator.getGamepads().map((_gamepad, index) => <GamepadOrNull key={index} gamepadIndex={index} />)}
        {gamepads === 0 && 'No gamepads'}
      </div>
    </FocusContext.Provider>
  )
})

export default Gamepads
