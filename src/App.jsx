import React from 'react'
import { FlexContent,Footer,Hero, Navbar, Sales,Stories,Cart} from './Components';
import { heroapi,toprateslaes,popularsales,highlight,sneaker,story,footerAPI} from './Data/Data';
import './index.css'; 



const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
    <main className='flex flex-col gap-16 relative'>
    <Hero heroapi={heroapi} />
    <Sales endpoint= {popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists/>
    <Sales endpoint= {toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story={story} />
    <Footer footerApI={footerAPI}/>
        
    

   </main>
   </>
  )
}




export default App
