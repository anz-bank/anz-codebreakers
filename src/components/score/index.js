import React from 'react'
import PropTypes from 'prop-types'

import { ScoreText } from './styles'

const Score = ({ score }) => (
  <ScoreText>Score: {score}</ScoreText>
)

Score.propTypes = {
  /** The current score in the game. */
  score: PropTypes.number
}

export default Score
