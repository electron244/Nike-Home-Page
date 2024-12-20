import './App.css'
import Navbar from './componenets/Navbar'
import Main from './componenets/Main'
import { Route,Routes} from 'react-router-dom'
import Menu from './componenets/Menu'
import Location from './componenets/Location'
import Contact from './componenets/Contact'
import About from './componenets/About'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Routes>
        <Route path='/menu' element={<Menu></Menu>}/>
        <Route path='/location' element={<Location></Location>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
      </Routes>
    </>
  )
}

export default App
