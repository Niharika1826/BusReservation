import React , { useState } from 'react'


export default function EditBusForm(props){

   
     const [bus,setBus] =useState(props.currentBus)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setBus({...bus,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
      props.updateBus(bus.busId,bus);
     }

     return (

      
      
        <form onSubmit={submitHandler}>
         
<label>busId</label>
<h1>{props.currentBus.busId}</h1>

<label>arrivalTime</label>
<input 
type='time'
name='arrivalTime'
value={bus.arrivalTime}
onChange={handleInputChange}/>

<label>availableSeats</label>
<input 
type='number'
name='availableSeats'
value={bus.availableSeats}
onChange={handleInputChange}/>

<label>busName</label>
<input 
type='text'
name='busName'
value={bus.busName}
onChange={handleInputChange}/>

<label>busType</label>
<input 
type='text'
name='busType'
value={bus.busType}
onChange={handleInputChange}/>

<label>departureTime</label>
<input 
type='time'
name='departureTime'
value={bus.departureTime}
onChange={handleInputChange}/>

<label>driverName</label>
<input 
type='text'
name='driverName'
value={bus.driverName}
onChange={handleInputChange}/>

<label>routeFrom</label>
<input 
type='text'
name='routeFrom'
value={bus.routeFrom}
onChange={handleInputChange}/>

<label>routeTo</label>
<input 
type='text'
name='routeTo'
value={bus.routeTo}
onChange={handleInputChange}/>

<label>seats</label>
<input 
type='number'
name='seats'
value={bus.seats}
onChange={handleInputChange}/>

    
<button>Update Feedback</button>
<button onClick={()=>props.setEditingBus(false)} 
className="button muted-button">Cancel</button></form>



   ) 

        
     }