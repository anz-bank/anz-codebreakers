import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import Emoji from '../emoji'

import { Character, InteractiveWrapper } from './styles'

const enhance = compose(
  withStateHandlers(
    ({ character }) => ({ solved: false, character: character }),
    {
      test: ({ character }) => (event) => (event.key === character && { solved: true })
    }
  )
)

const CodeSymbol = ({ emoji, character, solved, test }) => {
  if (solved) {
    return <Character>{character}</Character>
  } else {
    return (
      <InteractiveWrapper onKeyPress={test} tabIndex='0'>
        <Emoji src={emoji} block />
      </InteractiveWrapper>
    )
  }
}

export default enhance(CodeSymbol)
