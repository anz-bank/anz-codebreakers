import React from 'react'

import { AnzRow, AnzCol } from '@anz/grid'
import Text from '@anz/text'
import Button from '@anz/button'
import Section from '@anz/section'

import Emoji from '../../utils/emoji-builder.js'

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
          <Text>It was a dog. It was a big dog.</Text>
          <Text>Now, our operation is small but there is a lot of potential for aggressive expansion. So which of you fine gentlemen would like to join our team? Oh. There's only one spot open right now, so we're gonna have... tryouts.</Text>
          <Text>As Gotham's favored son you will be ideally placed to strike at the heart of criminality.</Text>
          <Text>If you're good at something, never do it for free.</Text>
          <Text>When a forest grows too wild, a purging fire is inevitable and natural. Tomorrow the world will watch in horror as its greatest city destroys itself. The movement back to harmony will be unstoppable this time.</Text>
          <Text>Maybe someday, when Gotham no longer needs Batman I'll see him again.</Text>
          <Text>What if, before she died, she wrote a letter saying she chose Harvey Dent over you? And what if, to spare you pain, I burnt that letter?</Text>
          <Text>Are you so desperate to fight criminals that you lock yourself in to take them on one at a time ?</Text>
          <Text>I am the League of Shadows.</Text>
          <Text>I think you and your friend have found the last game in town. where it hurts, their wallets. It's bold. You gonna count me in?</Text>
          <Text>I will go back to Gotham and I will fight men Iike this but I will not become an executioner.</Text>
          <Text>You fight like a younger man, there's nothing held back. It's admirable, but mistaken.</Text>
          <Text>But it's not who you are underneath... it's what you do that defines you.</Text>
          <Text>You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.</Text>
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
