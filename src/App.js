import React from 'react'
import Masthead from '@anz/masthead'
import Footer from '@anz/footer'

const App = () => (
  <div>
    <Masthead
      hero={{
        title: 'ANZ Codebreakers',
        subtitle: 'Go Girl Go 4 IT!',
        image: 'https://placeimg.com/1000/480/tech',
        show: true
      }}
    />
    <Footer />
  </div>
)

export default App
