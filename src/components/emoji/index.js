import React from 'react'
import PropTypes from 'prop-types'
import twemoji from 'twemoji'
import parser from 'html-react-parser'

import { EmojiWrapper } from './styles'

const twemojiSettings = {
  folder: 'svg',
  ext: '.svg'
}

const Emoji = ({ code, src }) => {
  const emoji = src || twemoji.convert.fromCodePoint(code)

  return (
    parser(
      twemoji.parse(
        emoji,
        twemojiSettings
      )
    )
  )
}

const WrappedEmoji = ({ code, src, size, block }) => {
  const wrapperProps = {}
  if (size) wrapperProps.size = size
  if (block) wrapperProps.block = block

  const emojiProps = {}
  if (code) emojiProps.code = code
  if (src) emojiProps.src = src

  return (
    <EmojiWrapper {...wrapperProps}>
      <Emoji {...emojiProps} />
    </EmojiWrapper>
  )
}

WrappedEmoji.propTypes = {
  /** The charCode in unicode for the emoji. */
  code: PropTypes.string,
  /** The unicode string literal for the emoji. */
  src: PropTypes.string,
  /** The size in valid css units of the emoji such as px, em or rem. */
  size: PropTypes.string,
  /** Whether the emoji should be displayed as block by css. */
  block: PropTypes.bool
}

export default WrappedEmoji
