import React from 'react'
import { Router } from '@reach/router'

import Masthead from '@anz/masthead'

import Home from './components/home'
import Easy from './components/easy'
import Medium from './components/medium'
import Hard from './components/hard'

import { AnzAppWrapper, StickyFooter, MainWrapper } from './App.styles'

const App = () => (
  <AnzAppWrapper>
    <Masthead
      maxWidth='auto'
      hero={{
        title: 'ANZ Codebreakers',
        subtitle: 'Go Girl Go for IT!',
        image: 'https://placeimg.com/1000/480/tech',
        show: true
      }}
    />
    <MainWrapper>
      <Router>
        <Home path='/' />
        <Easy path='easy' />
        <Medium path='medium' />
        <Hard path='hard' />
      </Router>
    </MainWrapper>
    <StickyFooter maxWidth='auto' />
  </AnzAppWrapper>
)

export default App
