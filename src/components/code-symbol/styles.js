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
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: #FFF;
  text-align: center;
  transition: background-color 0.2s;
  
  &:hover,
  &:focus {
    background-color: #007DBA;
  }
`

export const HiddenInput = styled.input`
  padding: 0;
  border: 0;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: none;
  background-color: transparent;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  width: 100%;
  color: transparent;

  &:focus {
    background-color: #007DBA;
  }
`
