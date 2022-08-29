import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'

function App() {

  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
