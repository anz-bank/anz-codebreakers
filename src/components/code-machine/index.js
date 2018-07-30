import React from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import filter from 'lodash/filter'

import Text from '@anz/text'
import Button from '@anz/button'

import CodeSymbol from '../code-symbol'
import Hint from '../hint'
import Timer from '../timer'
import Score from '../score'

import enhance from './index.hoc'
import { Spacer, GameHeaderCol, GameHeaderRow, GameWrapper, SolvedMessage, WordWrapper, DescriptionText } from './styles'

const CodeMachine = ({ description, code, messageArray, solveChar, stopTimer, started, startTimer, timeLeft, updateTimer, score, updateScore, finished, solveAll, solved, markSolved }) => (
  <React.Fragment>
    {description && <DescriptionText>{description}</DescriptionText>}
    <GameHeaderRow>
      <GameHeaderCol xs={6} md={4}>
        <Score score={score} />
      </GameHeaderCol>
      <GameHeaderCol xs={6} md={4}>
        <Timer {...{ started, finished, startTimer, timeLeft, updateTimer, stopTimer }} />
      </GameHeaderCol>
      <GameHeaderCol xs={12} md={4}>
        <Hint solveChar={solveChar} code={code} stopTimer={stopTimer} started={started} updateScore={updateScore} markSolved={markSolved} />
      </GameHeaderCol>
    </GameHeaderRow>
    <GameWrapper>
      {(started || finished) ? messageArray.map((word, wordIndex) => (
        <React.Fragment>
          <WordWrapper>
            {word.map((char, charIndex) => {
              const symbol = find(code, emoji => emoji.character.toUpperCase() === char.toUpperCase())
              symbol.character = char
              return (
                <CodeSymbol key={charIndex} {...symbol} solveChar={solveChar} stopTimer={stopTimer} updateScore={updateScore} markSolved={markSolved} />
              )
            })}
          </WordWrapper>
          <Spacer key={wordIndex} />
        </React.Fragment>
      )) : (
        <Text>Tap the Go! button to break the code!</Text>
      )}
      {finished && (
        filter(code, emoji => emoji.solved === false).length > 1 ? (
          <div>
            <Button type='button' id='solve-all-button' onClick={() => solveAll(solveChar)}>See the coded message.</Button>
          </div>
        ) : (
          <SolvedMessage>{solved ? 'Great work, you broke the code!' : 'Better luck next time, why not try again?'}</SolvedMessage>
        )
      )}
    </GameWrapper>
  </React.Fragment>
)

CodeMachine.propTypes = {
  /** The message that the code is to be constructed from. */
  message: PropTypes.string.isRequired,
  /** A sentence to describe what the code is about. */
  description: PropTypes.string,
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
  /** The nested array of individual letters within their words for displaying the message in symbols. */
  messageArray: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string
    )
  ),
  /** Function to solve a symbol. */
  solveChar: PropTypes.func,
  /** Function to stop the timer interval. */
  stopTimer: PropTypes.func,
  /** Whether the game has started or not. */
  started: PropTypes.bool,
  /** Function to start the game and timer interval. */
  startTimer: PropTypes.func,
  /** How much time is left in the game. */
  timeLeft: PropTypes.number,
  /** Function to update the time left each tick of the interval. */
  updateTimer: PropTypes.func,
  /** The current score. */
  score: PropTypes.number,
  /** Function to update the score. */
  updateScore: PropTypes.func,
  /** Whether the game has finished. */
  finished: PropTypes.bool,
  /** Function to reveal all symbols once the game has finished and the player hasn't broken the entire code. */
  solveAll: PropTypes.func,
  /** Whether the code was entirely broken or not. */
  solved: PropTypes.bool,
  /** Function to mark the code as broken. */
  markSolved: PropTypes.func
}

export default enhance(CodeMachine)
