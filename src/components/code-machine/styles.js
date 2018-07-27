import styled from 'styled-components'
import { AnzRow, AnzCol } from '@anz/grid'

export const Spacer = styled.span`
  display: inline-block;
  width: 3rem;
`

export const GameHeaderRow = styled(AnzRow)`
  margin-bottom: 1rem;
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
