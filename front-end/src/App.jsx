import './App.css'
import { useRef } from 'react'
import Header from './header.jsx'
import Body_Top from './components/body_top.jsx'
import Body_Mid from './components/body_mid.jsx'
import Body_Bottom from './components/body_bottom.jsx'
import Body_Last from './components/body_last.jsx'
import Footer from './components/footer.jsx'

function App() {
  const servicesRef = useRef(null);

  return (
    <>
      <Header servicesRef={servicesRef} />
      <Body_Top />
      <Body_Mid ref={servicesRef} />
      <Body_Bottom />
      <Body_Last />
      <Footer />
    </>
  ) 
}

export default App
