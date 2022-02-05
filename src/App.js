import React from "react"  
import Header from "./components/Header" 
import Meme from "./components/Meme" 
import Style from "./style.css"
 
/* 
   Challenge:  
  - Create a Meme component. 
  - Inside the Meme component, render a styled form 
    with our 2 imputs and the button. 
  - Don't worry about adding an functionality yet
 */
export default function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )

}
 
