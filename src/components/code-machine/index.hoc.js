import emojis from 'emoji.json/emoji-compact.json'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import cloneDeep from 'lodash/cloneDeep'
import find from 'lodash/find'
import filter from 'lodash/filter'

import { getRandomInt } from '../../utils'

let timerInterval = null

const enhance = compose(
  withStateHandlers(
    { code: [], messageArray: [], timeLeft: 60, started: false, finished: false, score: 0 },
    {
      getEmoji: ({ code }) => (character) => {
        if (!find(code, emoji => emoji.character === character.toUpperCase()) && character !== ' ') {
          const newCode = cloneDeep(code)
          let emojiNumber = getRandomInt(150)
          while (find(code, emoji => emojiNumber === emoji.number)) {
            emojiNumber = getRandomInt(150)
          }
          newCode.push({ number: emojiNumber, emoji: emojis[emojiNumber], character: character.toUpperCase(), solved: false })
          console.log(newCode)
          return { code: newCode }
        }
      },
      setMessageArray: () => (messageArray) => ({ messageArray: messageArray }),
      solveChar: ({ code, started, score, timeLeft, finished }) => (event, character, stopTimer, updateScore, markSolved, finish) => {
        if (((started || finish) && event.nativeEvent.data.toUpperCase() === character.toUpperCase())) {
          const newCode = cloneDeep(code)
          const symbol = find(newCode, emoji => emoji.character.toUpperCase() === event.nativeEvent.data.toUpperCase())
          symbol.solved = true
          const remaining = filter(newCode, emoji => emoji.solved === false).length
          if (remaining === 0 && !finished) {
            stopTimer()
            markSolved()
            if (!event.hintUsed && !finished) updateScore(score + timeLeft + 5)
          } else if (!event.hintUsed && !finished) updateScore(score + 5)
          return { code: newCode }
        }
      },
      startTimer: () => (updateTimer, stopTimer) => {
        timerInterval = setInterval(() => {
          updateTimer(stopTimer)
        }, 1000)
        return { started: true }
      },
      stopTimer: () => () => {
        clearInterval(timerInterval)
        return { started: false, finished: true }
      },
      updateTimer: ({ timeLeft }) => (stopTimer) => {
        if (timeLeft > 0) {
          return { timeLeft: timeLeft - 1 }
        } else {
          stopTimer()
        }
      },
      updateScore: () => (newScore) => ({ score: newScore }),
      solveAll: ({ code, stopTimer, updateScore }) => (solveChar) => {
        const remainingCode = filter(code, emoji => emoji.solved === false)
        remainingCode.forEach(emoji => {
          const syntheticEvent = { nativeEvent: { data: emoji.character }, hintUsed: true }
          solveChar(syntheticEvent, emoji.character, stopTimer, updateScore, () => {}, true)
        })
      },
      markSolved: () => () => ({ solved: true })
    }
  ),
  lifecycle({
    componentDidMount () {
      let messageArray = this.props.message.split(' ')
      messageArray = messageArray.map(word => {
        let wordArray = word.split('')
        wordArray.map(character => this.props.getEmoji(character))
        return wordArray
      })
      this.props.setMessageArray(messageArray)
    }
  })
)

export default enhance
