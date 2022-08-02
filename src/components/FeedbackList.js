import React ,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import {Card} from 'react-bootstrap';
import {Grid,CardContent} from '@mui/material';
import { Button } from 'react-bootstrap';
import addfeedbacklogo from '../images/addfeedbacklogo.jpg';
import AddFeedback from '../CSS/AddFeedback.css';


import {
    retrieveFeedbacks,

}from '../actions/feedbacks'
export default function FeedbackList(props){
 
    const dispatch=useDispatch();
    
    const userDetails = localStorage.getItem('userDetails');
    const [currentFeedback,setCurrentFeedback]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
     
    const feedbacks = useSelector((state)=>state.feedbacks);
     

    useEffect(()=>{
        dispatch(retrieveFeedbacks());
      },[]);

    
    const refreshData=()=>{
        setCurrentFeedback(null);
        setCurrentIndex(-1);
    }
 

    const setActiveFeedback = (feedback,index)=>{
        setCurrentFeedback(feedback);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 

    

return(

    <div className='fb_image'>

    <div className='container mr-5'>

    <div className='card-deck'>
        <div className='col mb-2'>
            <div className='card h-100'>
                <h4 className='card-title'>Reservation List</h4>

    <Grid container spacing={2}
    direction="row"
    justify="flex-start"
    alignItems='flex-start'
    style={{margin:'.35rem',margin:'.5rem',margin:'.1rem'}}>


  {feedbacks?.length > 0 ? (
    feedbacks.map((feedback)=>(
    <Grid key={feedback.feedBackId}>
        <Card style={{width:'18rem',margin:'2rem',backgroundColor:'#aed234',color:'white'}}>
            <Card.Img variant='top'src={addfeedbacklogo}width='287px'height='180'/>

            <Card.Body>
                

                <Card.Text>                      

             <CardContent>
        FeedBackId : {feedback.feedBackId}<br/>
        DriverRating:{feedback.driverRating}<br/>
        ServiceRating:{feedback.serviceRating}<br/>
        FeedBackDate:{feedback.feedBackDate}<br/>
        FeedBackTime:{feedback.feedBackTime}<br/>
       
        

      {userDetails &&

        (
            <section>


<Button variant="primary"onClick={()=>{props.editFeedBack(feedback)}}>
            
            <Link to = {`/updateFeedBack/${feedback.feedBackId}`}>
            Edit FeedBack
            </Link>
      </Button>
    <br/><br/>

    


        </section>

  
        )
}

</CardContent></Card.Text></Card.Body></Card></Grid>))):(
            <CardContent>
                No Reservations
            </CardContent>
        )
        
               
            
        }
        </Grid>
        </div></div></div></div>
        </div>

)




}