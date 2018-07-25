import React from 'react'
import twemoji from 'twemoji'
import parser from 'html-react-parser'
import styled from 'styled-components'

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

const EmojiWrapper = styled.span`
  .emoji {
    display: inline-block;
    height: ${({size}) => size || '1em'};
    width: ${({size}) => size || '1em'};
    margin-right: ${({size}) => size ? size / 2 : '0.5em'};
    transform: translateY(0.125rem);
  }
`

const WrappedEmoji = ({ code, src, size }) => {
  const wrapperProps = {}
  if (size) wrapperProps.size = size

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
