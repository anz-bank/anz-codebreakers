import styled from 'styled-components'

export const Character = styled.span`
  font-weight: bold;
  color: #004165;
  display: inline-block;
  font-size: 1.5rem;
  padding: 0.25rem;
`

export const InteractiveWrapper = styled.span`
  outline: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: #FFF;
  text-align: center;
  color: transparent;
  transition: background-color 0.2s;
  
  &:hover,
  &:focus {
    background-color: #007DBA;
  }
`
