import { useState } from "react"
import Button from "./components/button/Button"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navlinks from "./components/navlinks/Navlinks"

function App() {
  
const [state,setstate]=useState("my app")

const handleButtonClicked=()=>{
  setstate("button clicked")
}

  return (
      <div className="App" style={{height:"100vh",width: "100vw"}}>

        {/* <div onClick={handleButtonClicked}><Button text={"Click me"}/></div>
        <Button text={"New button"} handleButtononclick={handleButtonClicked}/>
        <p>{state}</p> */}
        

        <Navlinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
