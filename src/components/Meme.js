import React from "react"  
import memesData from "../memesData"
 
export default function Meme() {   
   
    const [memeImage, setMemeImage] = React.useState("")  
   /* 
      Challenge Save the random meme URL in state 
      - Create new state called `memeImage` with an  
        empty string as default 
      - When the getMemeImage function is called, update the 
       `memeImage` state to be the random chosen 
        image URL  
      - Below the div.from, add an <img /> and set the  
       src to the new `memeImage` state you created 

   */ 
    function getMemeImage() { 
       const memesArray = memesData.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length) 
       setMemeImage(memesArray[randomNumber].url) 
       console.log('button clicked')
    }
     return (  
         <main>  
             <div className="form">  
                 <input  
                   type='text'  
                   placeholder="Top text"
                   className="form--input"
                 /> 
                 <input  
                   type='text'  
                   placeholder="Bottom text"                    
                   className="form--input"                    
                 />  
                 <button 
                     className="form--button"  
                     onClick={getMemeImage}
                 > 
                     Get a new meme image</button>
             </div> 
            <img className='meme--img' src={memeImage} />
         </main>    
     )
}