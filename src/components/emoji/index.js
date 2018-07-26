import React from 'react'
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

export default WrappedEmoji
