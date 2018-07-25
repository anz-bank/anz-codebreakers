import React from 'react'
import { navigate } from '@reach/router'

import { AnzGrid, AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'

import Emoji from '../../utils/emoji-builder.js'

const Medium = () => (
  <AnzGrid fluid maxWidth='auto'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading>Medium</Text>
        <Button id='back-to-home' appearance='ghost' onClick={() => navigate('/')} icon={<Emoji code='1F3E1' />}>Back to home</Button>
      </AnzCol>
    </AnzRow>
  </AnzGrid>
)

export default Medium
