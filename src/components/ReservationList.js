import React ,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {Grid,CardContent,Button} from '@mui/material';
import { Card } from 'react-bootstrap';
import reservationslogo from '../images/reservationslogo.jpg';
import AddReservation from '../CSS/AddReservation.css';

import {
    retrieveReservations,

} from '../actions/reservations'
export default function ReservationList(props){

    const dispatch=useDispatch();
    const [currentReservation,setCurrentReservation]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);

    const reservations = useSelector((state)=>state.reservations);
      
    useEffect(()=>{
        dispatch(retrieveReservations());
      },[]);

    
     const refreshData=()=>{
        setCurrentReservation(null);
        setCurrentIndex(-1);
    } 
 

     const setActiveReservation = (reservation,index)=>{
        setCurrentReservation(reservation);
        setCurrentIndex(index);

    } 

    const userDetails = localStorage.getItem('userDetails')

    return(

         <div className='ad_resimage'>
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


  {reservations?.length > 0 ? (
    reservations.map((reservation)=>(
    <Grid key={reservation.reservationId}>
        <Card style={{width:'18rem',margin:'2rem',backgroundColor:'#aed234',color:'white'}}>
            <Card.Img variant='top'src={reservationslogo}width='287px'height='180'/>

            <Card.Body>
                

                <Card.Text>                      

             <CardContent>
        ReservationId : {reservation.reservationId}<br/>
        ReservationType:{reservation.reservationType}<br/>
        ReservationDate:{reservation.reservationDate}<br/>
        ReservationTime:{reservation.reservationTime}<br/>
        Source:{reservation.source}<br/>
        Destination:{reservation.destination}<br/>
        
        

      {userDetails &&

        (
            <section>


<Button variant="primary"onClick={()=>{props.editReservation(reservation)}}>
            
            <Link to = {`/updateReservation/${reservation.reservationId}`}>
            Edit Reservation
            </Link>
      </Button>
    <br/><br/>

    <Button variant="primary"onClick={()=>{props.deleteReservation(reservation.reservationId)}}>
        
            Delete Reservation
       
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
        </div></div></div></div></div>
        
    )


}