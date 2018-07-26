import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../emoji'
import CodeSymbol from '../code-symbol'

import { EasyGrid, EasyCol } from './styles'

const Easy = ({ navigate }) => (
  <EasyGrid fluid maxWidth='1366'>
    <AnzRow>
      <AnzCol xs={12}>
        <Text heading><Emoji src='🍼' /> Easy</Text>
      </AnzCol>
    </AnzRow>
    <AnzRow>
      <EasyCol xs={12}>
        <Section id='easy-section'>
          <Text>Demo: the solve is "ANZ"</Text>
          <div>
            <CodeSymbol character='A' emoji='😎' />
            <CodeSymbol character='N' emoji='😭' />
            <CodeSymbol character='Z' emoji='😜' />
          </div>
        </Section>
      </EasyCol>
    </AnzRow>
    <AnzRow>
      <EasyCol xs={12}>
        <Button id='back-to-home' appearance='ghost' onClick={() => navigate('../')} icon={<Emoji src='🏠' />}>Back to home</Button>
      </EasyCol>
    </AnzRow>
  </EasyGrid>
)

export default Easy
