import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect ,useContext} from 'react';
import ReservationContext from '../context/AuthProvider';
import AddReservation from'../CSS/AddReservation.css';
import { addReservation } from '../actions/reservations';


export default function AddReservationForm(props){

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

const initialFormState ={

    reservationId:'0',
    
    reservationType:'',
    reservationDate:'',
    //reservationTime:'',
    source:'',
    destination:'',
    bus:{
        busId:0
    },
    user:{
        userLoginId:0
    },

}


const [reservation,setReservation]=useState(initialFormState);






const handleInputChange = (event)=>{
    const {name,value} =event.target;
   
    setReservation({...reservation,[name]:value});
 }
 const submitHandler=(event)=>{event.preventDefault();
    if( !reservation.reservationType || 
         !reservation.source ||!reservation.destination) return;
     console.log(reservation+'from addReservationform')
   //props.addReservation(reservation);
   dispatch(addReservation(reservation));
    setReservation(initialFormState);
    
    }
    
    return (

      <div className='ad_resimage'>

            <Form onSubmit={submitHandler} >
    
           <Form.Group className="mb-3" controlId="formBasicReservationId" >
    
                <Form.Label>Reservation Id</Form.Label>
    
                <Form.Control type="number" placeholder="Reservation Id" required
    
                 name='reservationId'
    
                 value={reservation.reservationId}
    
                onChange={handleInputChange} />
    
               
    
              </Form.Group>
    
         
    
              <Form.Group className="mb-3" controlId="formBasicReservationType" >
    
           <Form.Label>Reservation Type</Form.Label>
    
           
    
           
    
             <Form.Select aria-label="Default select example" name='reservationType'
    
              onChange={handleInputChange} placeholder="Select your type of reservation"  aria-required>

<option >Open this select type</option>

<option value="TravelAgent">Travel Agent</option>

<option value="UPI">UPI</option>

<option value="Credit">Credit</option>

<option value="PersonalApproach">Personal Approach</option>

</Form.Select>
</Form.Group>
 <Form.Group className="mb-3" controlId="formBasicBrand">
 <Form.Label>Reservation Time</Form.Label>
<Form.Control type="date" required
   name='reservationDate'
   value={reservation.reservationDate}
  onChange={handleInputChange} />

  

        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSource">

            <Form.Label>Source</Form.Label>

            <Form.Control type="text" placeholder=" Start Point" required

             name='source'

             value={reservation.source}

            onChange={handleInputChange} />

          </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicDestination">

            <Form.Label>Destination</Form.Label>

            <Form.Control type="text" placeholder=" Destination Point" required

              name='destination'

              value={reservation.destination}

            onChange={handleInputChange} />

          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicDestination">

         <Form.Label>UserLoginId</Form.Label>

      <Form.Control type="number" placeholder="userLoginId" required


  name='userLoginId'

         value={reservation.user.userLoginId}

         />

         </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicDestination">

            <Form.Label>BusId</Form.Label>

            <Form.Control type="number" placeholder="Boarding Point" required

              name='busId'

              value={reservation.bus.busId}

             />

          </Form.Group>
         

          <Button variant="primary" type="submit">

            Submit

          </Button>

        </Form>
    
        </div>     

    )
}