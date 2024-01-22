import React from 'react'
import Nav from './Nav'
import Hero from './Hero/Hero'
import Events  from './Events/Events'
import Members  from './Members/Members'
import Projects  from './projects'
import Contact from './Contact'
import Footer from './Footer'

const preview = () => {
  return (
    <div className='m-0 p-6 bg-[#ECECEC]'>
        <Nav/>
        <Hero/>
        <Events/>
        <Members/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default preview