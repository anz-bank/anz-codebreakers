import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import Emoji from '../emoji'

import { Character, InteractiveWrapper, HiddenInput } from './styles'

const enhance = compose(
  withStateHandlers(
    ({ character }) => ({ solved: false, character: character, inputRef: null }),
    {
      test: ({ character }) => (event) => (event.nativeEvent.data === character && { solved: true }),
      setInputRef: () => (elem) => ({ inputRef: elem })
    }
  )
)

const focusInput = (inputRef) => {
  inputRef.focus()
}

const CodeSymbol = ({ emoji, character, solved, test, inputRef, setInputRef }) => {
  if (solved) {
    return <Character>{character}</Character>
  } else {
    return (
      <InteractiveWrapper onClick={() => focusInput(inputRef)}>
        <HiddenInput type='text' onChange={(event) => test(event)} innerRef={setInputRef} />
        <Emoji src={emoji} block />
      </InteractiveWrapper>
    )
  }
}

export default enhance(CodeSymbol)
