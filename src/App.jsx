import Experience from './components/Experience'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {
  
  return (
    <>
    <div className='container' >
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        
    </div>
    <Layout />
    </>
  )
}

export default App
