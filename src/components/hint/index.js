import React from 'react'
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

export default enhance(Hint)
