import React from 'react'
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

export default enhance(CodeMachine)
