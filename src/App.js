import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Titul from './components/Titul'
import Author from './components/Author'
import Copy_block from './components/Copy_block'
import Contact from './components/Contact'
import BooksContainer from './components/BooksContainer'
import CustomerContainer from './components/CustomerContainer'
import LearnContainer from './components/LearnContainer'
import ResourcesContainer from './components/ResourcesContainer'

export default function App() {
  return (
    <div>
      <Nav />
      <Titul />
      <BooksContainer />
      <Author />
      <CustomerContainer />
      <Copy_block />
      <LearnContainer />
      <ResourcesContainer />
      <Contact />
    </div>
  )
}
