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
import { Spacer, GameHeaderCol, GameHeaderRow, GameWrapper, SolvedMessage } from './styles'

const CodeMachine = ({ code, messageArray, solveChar, stopTimer, started, startTimer, timeLeft, updateTimer, score, updateScore, finished, solveAll }) => (
  <React.Fragment>
    <GameHeaderRow>
      <GameHeaderCol xs={6} md={4}>
        <Score score={score} />
      </GameHeaderCol>
      <GameHeaderCol xs={6} md={4}>
        <Timer {...{ started, finished, startTimer, timeLeft, updateTimer, stopTimer }} />
      </GameHeaderCol>
      <GameHeaderCol xs={12} md={4}>
        <Hint solveChar={solveChar} code={code} stopTimer={stopTimer} started={started} updateScore={updateScore} />
      </GameHeaderCol>
    </GameHeaderRow>
    <GameWrapper>
      {(started || finished) ? messageArray.map((char, index) => {
        const symbol = find(code, emoji => emoji.character === char)
        return symbol.character !== ' ' ? (
          <CodeSymbol key={index} {...symbol} solveChar={solveChar} stopTimer={stopTimer} updateScore={updateScore} />
        ) : (
          <Spacer key={index} />
        )
      }) : (
        <Text>Tap the Go! button to break the code!</Text>
      )}
      {finished && (
        filter(code, emoji => emoji.solved === false).length > 1 ? (
          <div>
            <Button type='button' id='solve-all-button' onClick={solveAll}>See the coded message.</Button>
          </div>
        ) : (
          <SolvedMessage>Great work, you broke the code!</SolvedMessage>
        )
      )}
    </GameWrapper>
  </React.Fragment>
)

export default enhance(CodeMachine)
