import Home from './pages/Home'
import Reveal from './Reveal'
import Header from './component/Header'
import Footer from './component/Footer'

function App(){
  Reveal();
  
  return(
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App