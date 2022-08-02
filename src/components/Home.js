import {Link} from 'react-router-dom';
import buslogo2 from '../images/buslogo2.jpg';
import '../App.css';

const Home = ()=>{

  
    return(
      <div>
      

      <div className='bg_image'>
  
<div class = "logo" align ='right'>
  <img src={buslogo2} width = "100px"></img>
         <div align='center'>
            <h3>Please register</h3>
         <a href="register"><button className='m-2 btn register'>Register</button></a>
         <h3>Already Registered please Login!!!!</h3>
           <a href="login"><button className='m-2 btn login'>Login</button></a>

           </div>   
           </div>   
      
        
           </div>
      
        </div>
    )
}

export default Home;