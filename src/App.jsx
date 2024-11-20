import './App.css'
import Title from './components/Title'
import Hero from './components/Hero'
import YearsAnimation from './components/YearsAnimation'

import Narrative from './components/Narrative'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app'>
      <Title />
      <Hero />
      <YearsAnimation />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
