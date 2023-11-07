import './home2.css';
import Home from './home';
import React from "react";
import {useState, useEffect} from 'react';
import d from '../images/d.jpg';
import home2 from '../images/home2.jpg';



function Home2(){
    const [buttonPopup, setButtonPopup] = useState(1);
  
    
    return(

        <div className='home2'>
<Home trigger={buttonPopup} setTrigger={setButtonPopup}></Home>
  

         <section className='left'>
       < img src={d} alt='d'/>
     
        <div className="form">
            <h3> Sign up for our e-catalog and get 30% off</h3>
            <div className="control">
                <label className='form-label'>Name:</label>
                <input className='form-control' placeholder="Name" type='text'/>
            </div>

            <div className='control'>
                <label className='form-label'>E-mail:</label>
                <input type='email' placeholder="Email" className='form-control'/>
            </div>
            </div>
      
        </section>
        <section className='right'>
              <div >
            <img src={home2} alt='home2' className='float-img'/>
        </div>
        </section>
        
        </div>



    );
    }
    export default Home2;
