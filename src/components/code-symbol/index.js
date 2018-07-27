import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import Emoji from '../emoji'

import { Character, InteractiveWrapper, HiddenInput } from './styles'

const enhance = compose(
  withStateHandlers(
    { inputRef: null },
    {
      setInputRef: () => (elem) => ({ inputRef: elem })
    }
  )
)

const focusInput = (inputRef) => {
  inputRef.focus()
}

const CodeSymbol = ({ emoji, character, solved, solveChar, inputRef, setInputRef }) => {
  if (solved) {
    return <Character>{character}</Character>
  } else {
    return (
      <InteractiveWrapper onClick={() => focusInput(inputRef)}>
        <HiddenInput type='text' onChange={(event) => solveChar(event, character)} innerRef={setInputRef} />
        <Emoji src={emoji} block />
      </InteractiveWrapper>
    )
  }
}

export default enhance(CodeSymbol)
