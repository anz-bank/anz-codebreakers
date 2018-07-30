import React from 'react'
import PropTypes from 'prop-types'
import { compose, withStateHandlers } from 'recompose'

import Emoji from '../emoji'

import { Character, InteractiveWrapper, HiddenInput, CharacterWrapper } from './styles'

const enhance = compose(
  withStateHandlers(
    { inputRef: null, inputValue: '' },
    {
      setInputRef: () => (elem) => ({ inputRef: elem })
    }
  )
)

const focusInput = (inputRef) => {
  inputRef.focus()
}

const CodeSymbol = ({ emoji, character, solved, solveChar, inputRef, setInputRef, stopTimer, updateScore, markSolved, inputValue }) => {
  if (solved) {
    return (
      <Character>
        <CharacterWrapper>
          {character}
        </CharacterWrapper>
      </Character>
    )
  } else {
    return (
      <InteractiveWrapper onClick={() => focusInput(inputRef)}>
        <HiddenInput type='text' onChange={event => solveChar(event, character, stopTimer, updateScore, markSolved)} innerRef={setInputRef} value={inputValue} />
        <Emoji src={emoji} block />
      </InteractiveWrapper>
    )
  }
}

CodeSymbol.propTypes = {
  /** String representation of the emoji. */
  emoji: PropTypes.string.isRequired,
  /** The character to be associated with the emoji. */
  character: PropTypes.string.isRequired,
  /** Whether this symbol is solved. */
  solved: PropTypes.bool,
  /** Function passed in to mark the symbol as solved. */
  solveChar: PropTypes.func,
  /** React ref to the hidden input used for capturing input on mobile. */
  inputRef: PropTypes.elem,
  /** Function to set the React ref. */
  setInputRef: PropTypes.func,
  /** Function to stop the timer interval. */
  stopTimer: PropTypes.func,
  /** Function to update the score. */
  updateScore: PropTypes.func,
  /** Function to mark the code as broken. */
  markSolved: PropTypes.func,
  /** Helper value in state to stop characters entered on mobile from being added to the hidden input. */
  inputValue: PropTypes.string
}

export default enhance(CodeSymbol)
