import { useState } from 'react'
import NavBar from './Components/navBar.jsx'
import HomeMain from './Components/HomeMain.jsx'
import Seller from './Components/Seller.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <HomeMain/>
      {/* <Seller/> */}
      <Footer/>
    </>
  )
}

export default App
