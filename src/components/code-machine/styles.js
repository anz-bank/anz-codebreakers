import styled from 'styled-components'
import { AnzRow, AnzCol } from '@anz/grid'

export const Spacer = styled.span`
  display: inline-block;
  width: 3rem;
`

export const GameHeaderRow = styled(AnzRow)`
  margin: 0 0 1rem;
  background: #EDEEEF;
  padding: 2rem 1rem 1rem;
  border-radius: 0.125rem;
  transition: margin 0.2s;

  @media screen and (min-width: 768px) {
    margin: 0 -1.25rem 1rem;
  }

  @media screen and (min-width: 960px) {
    margin: 0 -2rem 1rem;
  }
`

export const GameHeaderCol = styled(AnzCol)`
  margin-bottom: 1rem;
  text-align: center;
`

export const GameWrapper = styled.div`
  text-align: center;
`

export const SolvedMessage = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #007DBA;
`

export const WordWrapper = styled.span`
  display: inline-block;
`

export const DescriptionText = styled.p`
  margin: 0 0 1rem;
  font-weight: 300;
  font-size: 2rem;
  color: #007DBA;
  text-align: center;
`
