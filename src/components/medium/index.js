import React from 'react'

import { AnzGrid, AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'

import Emoji from '../../utils/emoji-builder.js'

const Medium = ({ navigate }) => (
  <AnzGrid fluid maxWidth='auto'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading>Medium</Text>
        <Button id='back-to-home' appearance='ghost' onClick={() => navigate('../')} icon={<Emoji src='🏠' />}>Back to home</Button>
      </AnzCol>
    </AnzRow>
  </AnzGrid>
)

export default Medium
