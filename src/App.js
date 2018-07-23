import React from 'react'

import Masthead from '@anz/masthead'

import { AnzAppWrapper, StickyFooter, MainWrapper } from './App.styles'

const App = () => (
  <AnzAppWrapper>
    <Masthead
      hero={{
        title: 'ANZ Codebreakers',
        subtitle: 'Go Girl Go 4 IT!',
        image: 'https://placeimg.com/1000/480/tech',
        show: true
      }}
    />
    <MainWrapper />
    <StickyFooter />
  </AnzAppWrapper>
)

export default App
