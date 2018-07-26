import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../../utils/emoji-builder.js'

import { HomeGrid, HomeCol } from './styles'

const Home = ({ navigate }) => (
  <HomeGrid fluid maxWidth='1366'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading><Emoji src='🏠' /> Home</Text>
      </AnzCol>
    </AnzRow>
    <AnzRow>
      <HomeCol xs={12} md={4}>
        <Section id='easy-section'>
          <Text heading='2'><Emoji src='🍼' /> Easy</Text>
          <Text>To break this code you'll need to uncover which emoji's match which letters of the alphabet.</Text>
          <Button id='nav-easy' size='large' onClick={() => navigate('easy')} fullWidth>Let's have a go!</Button>
        </Section>
      </HomeCol>
      <HomeCol xs={12} md={4}>
        <Section id='medium-section'>
          <Text heading='2'><Emoji src='🍵' /> Medium</Text>
          <Text>This code requires you to match punctuation as well as letters.</Text>
          <Button id='nav-medium' size='large' onClick={() => navigate('medium')} fullWidth>Time to step it up!</Button>
        </Section>
      </HomeCol>
      <HomeCol xs={12} md={4}>
        <Section id='hard-section'>
          <Text heading='2'><Emoji src='☕' /> Hard</Text>
          <Text>Now we've added in different emojis for uppercase and lowercase letters, as well as numbers.</Text>
          <Button id='nav-hard' size='large' onClick={() => navigate('hard')} fullWidth>Give me a challenge!</Button>
        </Section>
      </HomeCol>
    </AnzRow>
  </HomeGrid>
)

export default Home
