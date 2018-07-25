import React from 'react'
import twemoji from 'twemoji'
import parser from 'html-react-parser'
import styled from 'styled-components'

const twemojiSettings = {
  folder: 'svg',
  ext: '.svg'
}

const Emoji = ({ code }) => (
  parser(
    twemoji.parse(
      twemoji.convert.fromCodePoint(code),
      twemojiSettings
    )
  )
)

const EmojiWrapper = styled.span`
  .emoji {
    display: inline-block;
    height: ${({size}) => size || '1rem'};
    width: ${({size}) => size || '1rem'};
    margin-right: ${({size}) => size ? size / 2 : '0.5rem'};
    transform: translateY(0.125rem);
  }
`

const WrappedEmoji = ({ code, size }) => <EmojiWrapper size={size}><Emoji code={code} /></EmojiWrapper>

export default WrappedEmoji
