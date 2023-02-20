import { FC } from 'react'
import Gamepads from './gamepads/Gamepads'
import HeadPortal from './HeadPortal'

const App: FC = () => {
  return (
    <>
      <HeadPortal>
        <title>Gamepad API Demo</title>
      </HeadPortal>
      <Gamepads />
      <br />
      Tip: You can use a gamepad to click the buttons!
      TODO: Edit numbers with a gamepad
    </>
  )
}

export default App
