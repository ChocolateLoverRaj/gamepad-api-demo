import { FC } from 'react'
import Props from './Props'
import Vibrate from './Vibrate'

const Gamepad: FC<Props> = ({ gamepad }) => {
  console.log(gamepad)
  return (
    <>
      Connected gamepad
      <Vibrate gamepad={gamepad} />
    </>
  )
}

export default Gamepad
