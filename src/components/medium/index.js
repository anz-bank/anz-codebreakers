import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../emoji'
import CodeMachine from '../code-machine'
import HowToPlay from '../how-to-play'

import { MediumGrid, MediumCol } from './styles'

const Medium = ({ navigate }) => (
  <MediumGrid fluid maxWidth='1366'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading><Emoji src='😌' /> Medium</Text>
      </AnzCol>
    </AnzRow>
    <AnzRow>
      <MediumCol xs={12}>
        <Section id='medium-section'>
          <CodeMachine message='ICARE: Integrity, Collaboration, Accountability, Respect and Excellence.' description={`This code will let you know ANZ' s core values.`} />
        </Section>
      </MediumCol>
    </AnzRow>
    <HowToPlay />
    <AnzRow>
      <MediumCol xs={12}>
        <Button id='back-to-home' appearance='ghost' onClick={() => navigate('../')} icon={<Emoji src='🏠' />}>Back to home</Button>
      </MediumCol>
    </AnzRow>
  </MediumGrid>
)

export default Medium
