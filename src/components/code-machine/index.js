import React from 'react'
import emojis from 'emoji.json/emoji-compact.json'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import find from 'lodash/find'
import cloneDeep from 'lodash/cloneDeep'

import CodeSymbol from '../code-symbol'

import { Spacer } from './styles'

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const enhance = compose(
  withStateHandlers(
    { code: [], messageArray: [] },
    {
      getEmoji: ({ code }) => (character) => {
        if (!find(code, emoji => emoji.character === character)) {
          let emojiNumber = getRandomInt(150)
          while (find(code, emoji => emojiNumber === emoji.number)) {
            emojiNumber = getRandomInt(150)
          }
          code.push({ number: emojiNumber, emoji: emojis[emojiNumber], character: character, solved: false })
          return { code: code }
        }
      },
      setMessageArray: () => (messageArray) => ({ messageArray: messageArray }),
      solveChar: ({ code }) => (event, character) => {
        if (event.nativeEvent.data === character) {
          const newCode = cloneDeep(code)
          const symbol = find(newCode, emoji => emoji.character === event.nativeEvent.data)
          symbol.solved = true
          console.log(newCode)
          return { code: newCode }
        }
      }
    }
  ),
  lifecycle({
    componentDidMount () {
      let messageArray = this.props.message.split('')
      messageArray.map(character => this.props.getEmoji(character))
      this.props.setMessageArray(messageArray)
    }
  })
)

const CodeMachine = ({ code, messageArray, solveChar }) => (
  <React.Fragment>
    {messageArray.map((char, index) => {
      const symbol = find(code, emoji => emoji.character === char)
      return symbol.character !== ' ' ? (
        <CodeSymbol key={index} {...symbol} solveChar={solveChar} />
      ) : (
        <Spacer key={index} />
      )
    })}
  </React.Fragment>
)

export default enhance(CodeMachine)
