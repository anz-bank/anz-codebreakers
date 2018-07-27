import React from 'react'

import Button from '@anz/button'

import { TimerText } from './styles'

const Timer = ({ timeLeft, updateTimer, startTimer, started, finished, stopTimer }) => (
  <React.Fragment>
    {(started || finished) ? (
      <TimerText timeLeft={timeLeft}>{timeLeft > 0 ? `Time left: ${timeLeft}` : `Time's up`}</TimerText>
    ) : (
      <Button id='start-button' type='button' appearance='action' onClick={() => startTimer(updateTimer, stopTimer)}>Go!</Button>
    )}
  </React.Fragment>
)

export default Timer
