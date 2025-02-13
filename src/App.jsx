import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { useState } from "react"
import Button from "./components/button/Button"
import { Route, Routes} from "react-router-dom"
import Navlinks from "./components/navlinks/Navlinks"
import Addmarks from "./pages/Addmarks"
function App() {
  const [state, setState]=useState("react-practice")
  const handleButtonClick = () => {
    setState("button clicked")
  }
  return (

    <div className="App" style={{height:"100vh",width:"100vw"}}>

      {/* <div onClick={handleButtonClick}><Button text={"click me"}/></div>
      <Button text ={"New Button"}handleButtonClick={handleButtonClick} />
     <p>{state} </p> */}
     <Navlinks/>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Addmarks" element={<Addmarks />} />  

     </Routes>
    
    </div>

  )
}

export default App
