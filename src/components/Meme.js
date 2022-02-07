import React from "react"  
import memesData from "../memesData"
 
export default function Meme() {    

     const [meme, setMeme] = React.useState({ 
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg" 
     })    
    const [allMemeImage, setAllMemeImage] = React.useState(memesData)
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")  
    
    function getMemeImage() { 
       const memesArray = allMemeImage.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)  
       const url = memesArray[randomNumber].url
       setMeme(prevMeme => ({ 
          ...prevMeme, 
          randomImage: url
       }))  
       
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
            <img className='meme--img' src={meme.randomImage} />
         </main>    
     )
}