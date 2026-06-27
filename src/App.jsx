import Home from './pages/Home'
import Reveal from './Reveal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App(){
  Reveal();
  
  return(
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App