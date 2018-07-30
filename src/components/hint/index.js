import React from 'react'
import PropTypes from 'prop-types'
import { compose, withStateHandlers } from 'recompose'
import filter from 'lodash/filter'

import Button from '@anz/button'

import { getRandomInt } from '../../utils'

import { HintText } from './styles'

const enhance = compose(
  withStateHandlers(
    ({ solveChar, updateScore, stopTimer, markSolved }) => ({ hintsLeft: 3, solveChar, stopTimer, updateScore, markSolved }),
    {
      hintUsed: ({ hintsLeft }) => () => ({ hintsLeft: hintsLeft - 1 }),
      useHint: ({ solveChar, updateScore, stopTimer, markSolved }) => (hintUsed, code) => {
        const unsolvedCode = filter(code, emoji => emoji.solved === false)
        const emoji = unsolvedCode[getRandomInt(unsolvedCode.length - 1)]
        const syntheticEvent = { nativeEvent: { data: emoji.character }, hintUsed: true }
        hintUsed()
        solveChar(syntheticEvent, emoji.character, stopTimer, updateScore, markSolved)
      }
    }
  )
)

const Hint = ({ useHint, hintsLeft, hintUsed, code, started }) => (
  <React.Fragment>
    <Button type='button' id='hint-button' disabled={hintsLeft === 0 || !started} onClick={() => useHint(hintUsed, code)} appearance='destructive'>I need a hint!</Button>
    <HintText>{hintsLeft > 0 ? hintsLeft : `No`} hint{hintsLeft !== 1 && `s`} left</HintText>
  </React.Fragment>
)

Hint.propTypes = {
  /** Function to use a hint which solves a random symbol and subtracts 1 from the available hints. */
  useHint: PropTypes.func,
  /** How many hints are left to be able to be used. */
  hintsLeft: PropTypes.number,
  /** Function to subtract 1 from the available hints. */
  hintUsed: PropTypes.func,
  /** The code that has been derived from the message. */
  code: PropTypes.arrayOf(
    PropTypes.shape({
      /** The character to be associated with the emoji. */
      character: PropTypes.string.isRequired,
      /** Number representation of the emoji based on unicode table at https://unicode.org/emoji/charts/full-emoji-list.html */
      number: PropTypes.number.isRequired,
      /** String representation of the emoji. */
      emoji: PropTypes.string.isRequired,
      /** Whether the symbol is solved or not. */
      solved: PropTypes.bool.isRequired
    })
  ).isRequired,
  /** Whether the game has been started, used to determine whether the use hint button is disabled. */
  started: PropTypes.bool
}

export default enhance(Hint)
