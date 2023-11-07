import React from "react"
import  "./home.css";
import About from'./about';



function Home(props){
    


    return (props.trigger)?(  
        <div>        <div className="popup">
            <div className="popinner">
                <button className='close' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
            

        </div>

 
</div>): '';
    
}
 export default Home