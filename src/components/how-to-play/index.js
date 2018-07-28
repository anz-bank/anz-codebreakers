import React from 'react'

import { AnzRow } from '@anz/grid'
import Section from '@anz/section'
import Text from '@anz/text'

import Emoji from '../emoji'

import { HowToPlayCol } from './styles'

const HowToPlay = () => (
  <AnzRow>
    <HowToPlayCol xs={12}>
      <Section id='easy-how-to-play'>
        <Text heading='2'><Emoji src='🎮' /> How to play</Text>
        <ol>
          <li>Tap the Go! button.</li>
          <li>Tap on an emoji to select it.</li>
          <li>Select a letter or symbol you think matches that emoji.</li>
          <li>If you are correct it will solve each instance of that letter or punctuation.</li>
          <li>If you're stuck, use the hint button to solve one letter/symbol.</li>
        </ol>
      </Section>
    </HowToPlayCol>
  </AnzRow>
)

export default HowToPlay
