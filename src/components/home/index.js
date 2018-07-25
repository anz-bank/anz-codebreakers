import React from 'react'

import { AnzGrid, AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'

import Emoji from '../../utils/emoji-builder.js'

const Home = ({ navigate }) => (
  <AnzGrid fluid maxWidth='auto'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading><Emoji src='🏠' /> Home</Text>
      </AnzCol>
    </AnzRow>
    <AnzRow>
      <AnzCol xs={12} md={4}>
        <Text heading='2'>Easy</Text>
        <Button id='nav-easy' size='large' onClick={() => navigate('easy')} fullWidth icon={<Emoji src='🍼' />}>Let's have a go!</Button>
      </AnzCol>
      <AnzCol xs={12} md={4}>
        <Text heading='2'>Medium</Text>
        <Button id='nav-medium' size='large' onClick={() => navigate('medium')} fullWidth icon={<Emoji src='🍵' />}>Time to step it up!</Button>
      </AnzCol>
      <AnzCol xs={12} md={4}>
        <Text heading='2'>Hard</Text>
        <Button id='nav-hard' size='large' onClick={() => navigate('hard')} fullWidth icon={<Emoji src='☕' />}>Give me a challenge!</Button>
      </AnzCol>
    </AnzRow>
  </AnzGrid>
)

export default Home
