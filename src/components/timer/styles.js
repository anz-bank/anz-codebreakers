import styled from 'styled-components'

export const TimerText = styled.span`
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid #FFF;
  border-radius: 0.125rem;
  line-height: 2.5rem;
  color: ${({ timeLeft }) => timeLeft < 10 ? '#D73B33' : '#008A02'};
  font-weight: bold;
`
