import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../emoji'
import CodeMachine from '../code-machine'

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
          <CodeMachine message='Our purpose is to shape a world where people and communities thrive. Our people are proud to help people achieve incredible things – be it buying their home, building a business or saving for things big or small.' />
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
