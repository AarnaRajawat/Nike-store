import React from 'react'
import { FlexContent,Footer,Hero, Navbar, Sales,Stories} from './Components';
import { heroapi,toprateslaes,popularsales,highlight,sneaker,story,footerAPI} from './Data/Data';
import './index.css'; 
import Chatbot from "./Components/Chatbot";


const App = () => {
  return (
    <>
    <Navbar />

   <main className='flex flex-col gap-16 relative'>
    <Hero heroapi={heroapi} />
    <Sales endpoint= {popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists/>
    <Sales endpoint= {toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story={story} />
    <Footer footerApI={footerAPI}/>
  
    
   
<Chatbot />
        
    

   </main>
   </>
  )
}




export default App
