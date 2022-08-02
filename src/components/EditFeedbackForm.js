import React , {useContext, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditFeedbackForm(props){
     const [feedback,setFeedback] =useState(props.currentFeedback)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setFeedback({...feedback,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateFeedback(feedback.feedBackId,feedback);
    }


   

     return (

      <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicFeedbackId">
       <Form.Label>feedBack Id</Form.Label>
                                                   
       <h1>{props.currentFeedback.feedBackId}</h1>
            
       
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


    
     
     <Button variant="primary" type="submit">
       update feedBack
     </Button>
     <button onClick={()=>props.setEditingBus(false)} 
   className="button muted-button">Cancel</button></Form>


      
   )




}