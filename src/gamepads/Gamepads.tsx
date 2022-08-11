import reactObserver from 'observables/lib/reactObserver/reactObserver'
import GamepadOrNull from '../gamepadOrNull/GamepadOrNull'
import observableGamepads from '../observableGamepads/observableGamepads'

const Gamepads = reactObserver(observe => {
  const gamepads = observe(observableGamepads)

  return (
    <>
      {gamepads.map((gamepad, index) => <GamepadOrNull key={index} gamepad={gamepad} />)}
      {gamepads.length === 0 && 'No gamepads'}
    </>
  )
})

export default Gamepads
