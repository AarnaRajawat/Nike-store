import React from 'react'
import { FlexContent,Hero, Sales,Stories} from './Components';
import { heroapi,toprateslaes,popularsales,highlight,sneaker,story} from './Data/Data';
import './index.css'; 
import Chatbot from "./Components/Chatbot";


const App = () => {
  return (

   <main className='flex flex-col gap-16 relative'>
    <Hero heroapi={heroapi} />
    <Sales endpoint= {popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists/>
    <Sales endpoint= {toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story={story} />
  
    
   
<Chatbot />
        
    

   </main>
  )
}




export default App
