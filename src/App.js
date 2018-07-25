import React from 'react'
import { Router } from '@reach/router'

import Masthead from '@anz/masthead'
import banner from './assets/US_Navy_Cryptanalytic_Bombe.jpg'

import Home from './components/home'
import Easy from './components/easy'
import Medium from './components/medium'
import Hard from './components/hard'

import { AnzAppWrapper, StickyFooter, MainWrapper } from './App.styles'

const inSubDir = document.location.pathname.match(/anz-codebreakers/)

const App = () => (
  <AnzAppWrapper>
    <Masthead
      maxWidth='auto'
      hero={{
        title: 'ANZ Codebreakers',
        subtitle: 'Go Girl Go for IT!',
        image: banner,
        show: true
      }}
    />
    <MainWrapper>
      <Router basepath={inSubDir ? '/anz-codebreakers' : '/'}>
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
