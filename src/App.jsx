import Experience from './components/Experience'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {
  
  return (
    <>
    <div className='container lg:px-5 px-5' >
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
