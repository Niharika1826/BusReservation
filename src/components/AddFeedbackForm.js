import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions/feedbacks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import {Card} from 'react-bootstrap';
import { useContext } from 'react';
import ReservationContext from '../context/AuthProvider';



export default function AddFeedbackForm(props){

  const {busId,setBusId} = useContext(ReservationContext)
  const user1 = localStorage.getItem('userDetails') ;
  const uId = localStorage.getItem('userLoginId');
  console.log(uId+"***************");

  const [currentBus,setCurrentBus]=useState();

  const clickHandler=(bus)=>{
    setCurrentBus(bus);
    setBusId(bus.busId);
 }
   
const dispatch=useDispatch();
const initialFormState = {
   feedBackId:0,
   driverRating:0,
   serviceRating:0,
   overallRating:0,
   comments:'',
   user:{
    userLoginId:0
   },
   bus:{
    busId:0
   }
  
}
 
const [feedback,setFeedback]=useState(initialFormState);






const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setFeedback({...feedback,[name]:value});
}
 


const submitHandler=(event)=>{event.preventDefault();

   
 console.log(feedback+'from addfeedbackform')
//props.addFeedback(feedback);
dispatch(addFeedback(feedback));
setFeedback(initialFormState);

}
return (

  <div className='fb_image'>
    <br/>
    
  <Card style={{ backgroundColor:"skyblue",width: '20rem', padding:'60px' }}>
    <ListGroup variant="flush">

    
   <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicFeedbackId">
       <Form.Label>Feedback Id</Form.Label>
       <Form.Control type="number" placeholder="feedBack Id"
        name='feedBackId'
        value={feedback.feedBackId}
       onChange={handleInputChange} />
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicDriverRating">
       <Form.Label>Driver Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Rating between 1 to 5" 
        name='driverRating'
        value={feedback.driverRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicServiceRating">
       <Form.Label>Service Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Service Rating between 1 to 5"
       name='serviceRating'
       value={feedback.serviceRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicOverallRating">
       <Form.Label>OverAll Rating</Form.Label>
       <Form.Control type="number" placeholder="Give overall Rating between 1 to 10" 
        name='overallRating'
        value={feedback.overallRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicComments">
       <Form.Label>Comments</Form.Label>
       <Form.Control type="text" placeholder="Share your experience about your journey" 
         name='comments'
         value={feedback.comments}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicComments">
       <Form.Label>UserLoginId</Form.Label>
       <Form.Control type="number" placeholder="userId" 
         name='userLoginId'
         value={feedback.user.userLoginId}
       />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicComments">
       <Form.Label>BusId</Form.Label>
       <Form.Control type="number" placeholder="Share your experience about your journey" 
         name='busId'
         value={feedback.bus.busId}
        />
     </Form.Group>


     
     <Button variant="primary" type="submit">
            Add FeedBack
     </Button>
   </Form>
   </ListGroup>
   </Card>
   </div>
 );
}

{/* 

   <form onSubmit={submitHandler}>

   




<label>feedBackId</label><br/>
<input 
type='number'
name='feedBackId'
value={feedback.feedBackId}
onChange={handleInputChange}/>
<br/>

<label>driverRating</label><br/>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>
<br/>
<br/>

<label>serviceRating</label><br/>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>
<br/>

<label>overallRating</label><br/>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>
<br/>

<label>comments</label><br/>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>
<br/><br/>

<button>Add New feedback</button>


</form>
 */}



