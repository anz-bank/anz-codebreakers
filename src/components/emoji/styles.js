import styled from 'styled-components'

export const EmojiWrapper = styled.span`
  .emoji {
    display: inline-block;
    height: ${({ size }) => size || '1em'};
    width: ${({ size }) => size || '1em'};
    margin-right: ${({ size, block }) => block ? 0 : size ? size / 2 : '0.5em'};
    transform: translateY(0.125em);
  }
`
