import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../emoji'

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
          <Text heading='2'><Emoji src='😄' /> Easy</Text>
          <Text>Break the code to find out the name of the event.</Text>
          <Button id='nav-easy' size='large' onClick={() => navigate('easy')} fullWidth>Let's have a go!</Button>
        </Section>
      </HomeCol>
      <HomeCol xs={12} md={4}>
        <Section id='medium-section'>
          <Text heading='2'><Emoji src='😌' /> Medium</Text>
          <Text>This code will let you know ANZ's core values.</Text>
          <Button id='nav-medium' size='large' onClick={() => navigate('medium')} fullWidth>Time to step it up!</Button>
        </Section>
      </HomeCol>
      <HomeCol xs={12} md={4}>
        <Section id='hard-section'>
          <Text heading='2'><Emoji src='🤔' /> Hard</Text>
          <Text>Breaking this code will show you ANZ's mission.</Text>
          <Button id='nav-hard' size='large' onClick={() => navigate('hard')} fullWidth>Give me a challenge!</Button>
        </Section>
      </HomeCol>
    </AnzRow>
    <AnzRow>
      <HomeCol xs={12}>
        <Section>
          <Text heading='2'>Go Girl, Go For IT!</Text>
          <Text>Every 2 years, the Victorian ICT for Women network runs the event for all Victorian school girls in years 5 to 12 to hear about the incredible range of vocational avenues available in IT.</Text>
          <Text>ANZ has created this game for the event that is taking place on Thursday 16 August 2018 at Deakin University, Burwood Campus.</Text>
          <Text>Find out more about the great work done the by the Go Girl, Go For IT team <a href='https://www.gogirl.org.au/' target='_blank' rel='noopener'>on their website</a>.</Text>
        </Section>
      </HomeCol>
    </AnzRow>
  </HomeGrid>
)

export default Home
