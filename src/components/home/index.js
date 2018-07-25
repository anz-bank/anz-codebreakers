import React from 'react'
import { navigate } from '@reach/router'

import { AnzGrid, AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'

import Emoji from '../../utils/emoji-builder.js'

const Home = () => (
  <AnzGrid fluid maxWidth='auto'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading>Home</Text>
        <Button id='nav-easy' onClick={() => navigate('easy')} icon={<Emoji code='1F600' />}>Easy</Button>
        <Button id='nav-medium' onClick={() => navigate('medium')} icon={<Emoji code='1F611' />}>Medium</Button>
        <Button id='nav-hard' onClick={() => navigate('hard')} icon={<Emoji code='1F612' />}>Hard</Button>
      </AnzCol>
    </AnzRow>
  </AnzGrid>
)

export default Home
