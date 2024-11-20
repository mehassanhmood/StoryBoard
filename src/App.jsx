import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import './App.css'



import Hero from './components/Hero'
import YearsAnimation from './components/YearsAnimation'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const secondRef = useRef(null);
  const isInView = useInView(secondRef, {amount: 0.2});

  useEffect(() => {
    if (isInView) {
      secondRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
    }
  }, [isInView])

  return (
    <div className='app flex flex-col'>
      <Hero />
      <YearsAnimation reference={secondRef}/>
      <CTA />
      <Footer />
    </div>
  )
}

export default App
