import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addRoute } from '../actions/route';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




export default function AddRouteForm(props){
   
const dispatch=useDispatch();
  
const initialFormState = {
   id:0,
   routeFrom:'',
   routeTo:'',
   distance:0

}
 
const [route,setRoute]=useState(initialFormState);



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setRoute({...route,[name]:value});
}
 


const submitHandler=(event)=>{event.preventDefault();
if( !route.routeFrom || !route.routeTo || 
    !route.distance) return;
 console.log(route+'from addrouteform')
//props.addRoute(route);
dispatch(addRoute(route));
setRoute(initialFormState);

}
return (


   <div className='ad_image'>
      <br/>
      <h2> Add Route</h2>
   <Card style={{ backgroundColor: "lightGrey" ,width: '30rem' ,padding:'40px'}}>
      <ListGroup variant="flush">
   <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicRouteId">
       <Form.Label>RouteId</Form.Label>
       <Form.Control type="number" placeholder="RouteId"
        name='routeId'
        value={route.routeId}
       onChange={handleInputChange} />
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicrouteFrom" >
       <Form.Label>routeFrom</Form.Label>
         <Form.Select aria-label="Default select example" name='routeFrom' onChange={handleInputChange} placeholder="Choose the Starting point" >
         <option >Open this select menu</option>
         <option value="Karimnagar">Karimnagar</option>
         <option value="Chennai">Chennai</option>
         <option value="Hyderbad">Hyderbad</option>
         </Form.Select>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicrouteTo" >
       <Form.Label>routeTo</Form.Label>       
         <Form.Select aria-label="Default select example" name='routeTo' onChange={handleInputChange} placeholder="Choose the Ending point" >
         <option >Open this select menu</option>
         <option value="Mumbai">Mumbai</option>
         <option value="Goa">Goa</option>
         <option value="Pune">Pune</option>
         </Form.Select>
         </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicDistance">
       <Form.Label>distance</Form.Label>
       <Form.Control type="number" placeholder="distance" required
        name='distance'
        value={route.distance}
       onChange={handleInputChange} />
     </Form.Group>

     
     <Button variant="primary" type="submit">
       submit
     </Button>
   </Form>
   </ListGroup>
   </Card>
   </div>
 );

}