import styled from 'styled-components'
import Footer from '@anz/footer'

export const AnzAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`

export const MainWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const StickyFooter = styled(Footer)`
  align-self: flex-end;
  width: 100%;
`
