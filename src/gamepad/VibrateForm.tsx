import { FC } from 'react'
import Props from './Props'
import Form from '@rjsf/core'
import VibrateButton from './VibrateButton'
import StopButton from './StopButton'
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'

const VibrateForm: FC<Props> = ({ gamepadIndex }) => {
  const { ref, focusKey } = useFocusable()

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <Form
          schema={{
            type: 'object',
            properties: {
              duration: { type: 'number', minimum: 0 },
              startDelay: { type: 'number', minimum: 0 },
              strongMagnitude: { type: 'number', minimum: 0, maximum: 1 },
              weakMagnitude: { type: 'number', minimum: 0, maximum: 1 }
            },
            required: ['duration', 'startDelay', 'strongMagnitude', 'weakMagnitude']
          }}
          onSubmit={({ formData }) => {
            (navigator.getGamepads()[gamepadIndex] as any).vibrationActuator.playEffect('dual-rumble', formData)
          }}
          formData={{
            duration: 2000,
            startDelay: 0,
            strongMagnitude: 1,
            weakMagnitude: 1
          }}
        >
          <VibrateButton />
        </Form>
        <StopButton gamepadIndex={gamepadIndex} />
      </div>
    </FocusContext.Provider>
  )
}

export default VibrateForm
