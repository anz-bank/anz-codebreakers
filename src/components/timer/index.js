import React from 'react'
import PropTypes from 'prop-types'

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

Timer.propTypes = {
  /** How much time is left to break the code. */
  timeLeft: PropTypes.number,
  /** Function to update the timer each tick of the timer interval. */
  updateTimer: PropTypes.func,
  /** Function to start the timer interval. */
  startTimer: PropTypes.func,
  /** Whether the game has started. */
  started: PropTypes.bool,
  /** Whether the game has finished. */
  finished: PropTypes.bool,
  /** Function to stop the timer interval. */
  stopTimer: PropTypes.func
}

export default Timer
