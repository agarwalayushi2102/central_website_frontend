import react from 'react'
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/projects'

import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Members from './components/Members/Members'
export default function Home() {
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <Hero />
        <Events />
        <Members/>
        {/* <Form1/>
        
        <Form2/>
        <Template1/>
        <Template2/> */}
        <Projects/>
        <Contact/>
        <Footer />
    </div>
  );
}
