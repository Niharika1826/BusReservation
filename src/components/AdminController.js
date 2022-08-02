
import { Card, CardGroup, Nav } from 'react-bootstrap';
import addroute1 from '../images/addroute1.png';
import routelogo from '../images/routelogo.jpg';
import buscardlogo from '../images/buscardlogo.jpg';
import viewbuseslogo from '../images/viewbuseslogo.jpg';
import reservationslogo from '../images/reservationslogo.jpg';
import allfeedbacklogo1 from '../images/addfeedbacklogo1.jpg';
import alluserslogo from '../images/alluserslogo.jpg';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const AdminController=()=>{
  
    return(

      <section>
 
      <div className='c_image'>
      <table>
   <tr>
    <td>
  <div class="col">
 
      
       <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
         <Card.Img variant='top'src={addroute1}width='290'height='180'/>

              <Card.Link href="/addRoute">

            <Card.Title>Add Route</Card.Title>
           </Card.Link>

            </Card>
            
            
</div>
</td>

   <td>
      
  <div class='col'> 
    
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
      <Card.Img variant='top'src={routelogo}width='290'height='180'/>

      <Card.Link href="/getAllRoutes">

  <Card.Title>Get All Routes</Card.Title>
     </Card.Link>

       </Card>
       </div>  
       </td>     

   <td>
         <div class='col'> 
            
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd',alignContent:'right'}}>
      <Card.Img variant='top'src={buscardlogo}width='290'height='180'/>

      <Card.Link href="/addBus">

  <Card.Title>Add Bus</Card.Title>
     </Card.Link>

       </Card>
         </div>
         </td> 
         </tr>

      <tr>
        <td>
         <div class='col'>      
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
      <Card.Img variant='top'src={viewbuseslogo}width='290'height='180'/>

      <Card.Link href="/viewAllBuses">

  <Card.Title>View All Buses</Card.Title>
     </Card.Link>

       </Card>
         </div>
         </td>

         <td>

         <div class='col'>      
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
      <Card.Img variant='top'src={reservationslogo}width='290'height='180'/>

      <Card.Link href="/viewAllReservations">

  <Card.Title>View All Reservations</Card.Title>
     </Card.Link>

       </Card>
         </div>
         </td>

         <td>

         <div class='col'>      
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
      <Card.Img variant='top'src={alluserslogo}width='290'height='180'/>

      <Card.Link href="/viewAllUsers">

  <Card.Title>Get All Users</Card.Title>
     </Card.Link>
     

       </Card>
       </div>
</td>
</tr>
<tr>
  <td>
       <div class='col'>      
     <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
      <Card.Img variant='top'src={allfeedbacklogo1}width='290'height='180'/>

      <Card.Link href="/viewAllFeedBacks">

  <Card.Title>Get All FeedBacks</Card.Title>
     </Card.Link>

       </Card>

        
         </div>
         </td>
         </tr> 
      
      </table></div>

      <Button>
        <Link to = {'/logoutadmin'}>
          Logout
        </Link>
      </Button>
</section>
        
    )
}

export default AdminController;