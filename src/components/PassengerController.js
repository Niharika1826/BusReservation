import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import addfeedbacklogo1 from '../images/addfeedbacklogo1.jpg';
import viewfeedbacks from '../images/viewfeedbacks.png';
import viewallreservations from '../images/viewallreservations.jpg';
import allbuscardlogo from '../images/allbuscardlogo.jpg';
import passengerlogin from '../CSS/passengerlogin.css';
import {Button} from 'react-bootstrap';
const PassengerController=()=>{
  
    return(

      <div className='c_image'>

        

      <table>
      <tr>
      
   
      <td>
         
     <div class='col'> 
       
        <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#a2a432'}}>
         <Card.Img variant='top'src={viewfeedbacks}width='290'height='180'/>
   
         <Card.Link href="/viewAllFeedBacks">
   
     <Card.Title>View All FeedBacks</Card.Title>
        </Card.Link>
   
          </Card>
          </div>  
          </td>     
   
      
        </tr>

        <tr>
          <td>
            <div class='col'> 
               
        <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#a2a432',alignContent:'right'}}>
         <Card.Img variant='top'src={viewallreservations}width='290'height='180'/>
   
         <Card.Link href="/viewAllReservations">
   
     <Card.Title>view All Reservations</Card.Title>
        </Card.Link>
   
          </Card>
            </div>
            </td> 
            
   
         
           <td>
            <div class='col'>      
        <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#a2a432'}}>
         <Card.Img variant='top'src={allbuscardlogo}width='290'height='180'/>
   
         <Card.Link href="/viewAllBuses">
   
     <Card.Title>View All Buses</Card.Title>
        </Card.Link>
   
          </Card>
            </div>
            </td>
            </tr>
             
         
         </table>

         <Button>
        <Link to = {'/logoutadmin'}>
          Logout
        </Link>
      </Button>

         </div>


    )
}

export default PassengerController;