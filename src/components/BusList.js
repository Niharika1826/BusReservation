import React,{useState,useEffect, useContext} from 'react';
import { Card } from 'react-bootstrap';
import { useSelector,useDispatch} from 'react-redux';
import { Grid } from '@mui/material';
import buslogo2 from '../images/buslogo2.jpg';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReservationContext from '../context/AuthProvider';

import {
    retrieveBuses,

}from '../actions/buses'
export default function BusList(props){

 
     const {busId,setBusId} = useContext(ReservationContext);
    const dispatch=useDispatch();
    
    
    const [currentBus,setCurrentBus]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);

    const buses = useSelector((state)=>state.buses);
     

    useEffect(()=>{
        dispatch(retrieveBuses());
      },[]);

      
    
    const refreshData=()=>{
        setCurrentBus(null);
        setCurrentIndex(-1);
    }
 

    const setActivebus = (bus,index)=>{
        setCurrentBus(bus);
        setCurrentIndex(index);

    }

    const adminDetails = localStorage.getItem('adminDetails');
     const userDetails = localStorage.getItem('userDetails');

     const clickHandler=(bus)=>{
      setCurrentBus(bus);
      setBusId(bus.busId);
      console.log(busId+"**************");
     }

return(
  <section>

<div className='container mr-5'>

    <div className='card-deck'>
        <div className='col mb-2'>
            <div className='='card h-100>
                <h4 className='card-title'>Bus List</h4>

    <Grid container spacing={2}
    direction="row"
    justify="flex-start"
    alignItems='flex-start'
    style={{margin:'.35rem',margin:'.5rem',margin:'.1rem'}}>





  {buses?.length > 0 ? (
  buses.map((bus)=>(
    <Grid key={bus.busId}>
        <Card style={{width:'18rem',margin:'2rem',backgroundColor:'#aed234',color:'white'}}>
            <Card.Img variant='top'src={buslogo2}width='287px'height='180'/>

            <Card.Body>
                

                <Card.Text>

             <CardContent>

            BusId:{bus.busId}<br/><br/>
            Arrival Time:{bus.arrivalTime}<br/>
            AvailableSeats:{bus.availableSeats}<br/>
            BusName:{bus.busName}<br/>
            BusType:{bus.busType}<br/>
            Bus Departure Time:{bus.departureTime}<br/>
            Driver Name:{bus.driverName}<br/>
            Route From:{bus.routeFrom}<br/>
            Route To:{bus.routeTo}<br/>
            Seats:{bus.seats}<br/><br/>
        
          {userDetails &&
          (
            <div>
          <Button variant="primary"onClick={()=>{clickHandler(bus)}}>
            <Link to ={"/addReservation"}>
                Add Reservation
            </Link>
          </Button>

          <Button variant="primary"onClick={()=>{clickHandler(bus)}}>
            <Link to ={"/addFeedBack"}>
                Add FeedBack
            </Link>
          </Button>

          

        <br/><br/>
        </div>
          )
}

      {adminDetails && 
        (
            <section>
        <Button variant="primary" onClick={()=>{props.editBus(bus);console.log(JSON.stringify(bus))}}>
           <Link to ={`/updateBus/${bus.busId}`}>
                Edit Bus
                </Link>
          </Button>
        <br/><br/>

        <Button variant="primary"onClick={()=>{props.deleteBus(bus.busId)}}>
            
                Delete Bus
           
          </Button>
        <br/><br/>
        </section>

  )
}


        </CardContent></Card.Text></Card.Body></Card></Grid>))):(
            <CardContent>
                No Buses
            </CardContent>
        )
        
               
            
        }

            <CardContent>
            
            </CardContent>

        </Grid>
        </div></div></div></div>
        
        </section>




)




}