

import paint from '../images/paint.jpeg'
export default function Home (){
    return(

       <div>
        <img src={paint} alt='painting' className='logob'>
        </img>
       
           
 <header className="header">

     
        
       
<a href="./home.js" className="home">
    Home
</a>


<a href="./about.js" className="about">
  About </a>
<a href="./contact.js" className="contact">
    Contact
</a>
</header>  
     
  
</div>
       
    

    )
}