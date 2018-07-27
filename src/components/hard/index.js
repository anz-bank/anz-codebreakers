import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../emoji'
import CodeMachine from '../code-machine'

import { HardGrid, HardCol } from './styles'

const Hard = ({ navigate }) => (
  <HardGrid fluid maxWidth='1366'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading><Emoji src='☕' /> Hard</Text>
      </AnzCol>
    </AnzRow>
    <AnzRow>
      <HardCol xs={12}>
        <Section id='hard-section'>
          <CodeMachine />
        </Section>
      </HardCol>
    </AnzRow>
    <AnzRow>
      <HardCol xs={12}>
        <Button id='back-to-home' appearance='ghost' onClick={() => navigate('../')} icon={<Emoji src='🏠' />}>Back to home</Button>
      </HardCol>
    </AnzRow>
  </HardGrid>
)

export default Hard
