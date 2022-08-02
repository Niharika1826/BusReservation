import { Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Passenger from "./components/Passenger";
import PassengerLogin from "./components/PassengerLogin";
import './index.css';
import Home from "./components/Home";
import Register from "./components/Register";
import Admin from "./components/Admin";
import { useState,useEffect } from "react";
import apiClient from './api/http-common';
import EditRouteForm from './components/EditRouteForm';
import { BrowserRouter } from "react-router-dom";
import RouteList from './components/RouteList';
import AddRouteForm from './components/AddRouteForm';
import AdminController from "./components/AdminController";
import AdminLogin from "./components/AdminLogin";
import PassengerController from "./components/PassengerController";
import Login from "./components/Login";
import FeedbackList from "./components/FeedbackList";
import AddFeedbackForm from "./components/AddFeedbackForm";
import EditFeedbackForm from "./components/EditFeedbackForm";
import ReservationList from "./components/ReservationList";
import AddReservationForm from "./components/AddReservationForm";
import EditReservationForm from "./components/EditReservationForm";
import BusList from "./components/BusList";
import AddBusForm from "./components/AddBusForm";
import EditBusForm from "./components/EditBusForm";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";
import LogoutUser from "./components/LogoutUser";
import LogoutAdmin from './components/LogoutAdmin';
import './App.css';


function App(){

  const [routeData,setRoute]=useState([]);

    
  
    useEffect(()=>{apiClient.get('/getAllRoutes').then((response)=>{
      setRoute(response.data);
    })},[])

    
const [editingRoute,setEditingRoute]=useState(false);

const routeInitialFormState = {
  routeId:0,
  busId:0,
  routeFrom:'',
  routeTo:'',
  distance:''

}
const [currentRoute,setCurrentRoute] 
     =useState(routeInitialFormState);

   
async function addRoute(route){
  try{
  const response=await apiClient.post('/addRoute',route);
    setRoute([...routeData,response.data]);
    console.log(routeData);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteRoute(routeId){
  await apiClient.delete(`/deleteRoute/${routeId}`);
    setRoute(routeData.filter((route)=>route.routeId !== routeId));
  }
  
  const editRoute=(route)=>{

    setEditingRoute(true);
      setCurrentRoute
      ({routeId:route.routeId,busId:route.busId,routeFrom:route.routeFrom,
        routeTo:route.routeTo,distance:route.distance})
     
  }
  
  const updateRoute = (routeId,updatedRoute)=>{
  
    setEditingRoute(false);
    apiClient.put(`/updateRoute/${routeId}`,updatedRoute).then((response)=>
    {
  
      console.log('route updated');
      setRoute(routeData.map((route)=>
    (route.routeId === routeId ? updatedRoute : route)));
    })

  }


  const feedBackInitialFormState = {
    feedBackId:0,
    userLoginId:0,
      busId:0,
    driverRating:0,
    serviceRating:0,
    overallRating:0,
    comments:'',
    
  }
  const [feedbacks,setFeedbacks]=useState(feedBackInitialFormState);

    

    useEffect(()=>{apiClient.get('/viewAllFeedBacks').then((response)=>{
      setFeedbacks(response.data);
    })},[])
    
    

    
const [editingFeedBack,setEditingFeedBack]=useState(false);


const [currentFeedback,setCurrentFeedback] 
     =useState(feedBackInitialFormState);


async function addFeedback(feedback){
  try{
  const response=await apiClient.post('/addFeedBack',feedback);
    setFeedbacks([...feedbacks,response.data]);
    console.log(feedbacks);
    
  }catch(err){
    console.log(err)
  }
  
}
  
  const editFeedback=(feedback)=>{

    setEditingFeedBack(true);
      setCurrentFeedback
      ({feedBackId:feedback.feedBackId,userLoginId:feedback.user.userLoginId,busId:feedback.bus.busId,driverRating:feedback.driverRating,
        serviceRating:feedback.serviceRating,overallRating:feedback.overallRating,comments:feedback.comments,feedBackDate:feedback.feedBackDatae})
     
  }
  
  const updateFeedback = (feedBackId,updatedFeedback)=>{
  
    setEditingFeedBack(false);
    apiClient.put(`/updateFeedBack${feedBackId}`,updatedFeedback).then((response)=>
    {
  
      console.log('feedback updated');
      setFeedbacks(feedbacks.map((feedback)=>
    (feedback.feedBackId === feedBackId ? updatedFeedback : feedback)));
    })
    
  }

  const [reservations,setReservations]=useState([]);

  useEffect(()=>{apiClient.get("/viewAllReservations").then((response)=>{
    setReservations(response.data);
  })},[])

  const [editingReservation,setEditingReservation]=useState(false);

  const initialFormState ={
    reservationId:'0',
    reservationType:'',
    source:'',
    destination:''

  }

  const [currentReservation,setCurrentReservation] 
     =useState(initialFormState);

     async function addReservation(reservation){
      try{
      const response=await apiClient.post('/addReservation',reservation);
        setReservations([...reservations,response.data]);
        console.log(reservations);
        
      }catch(err){
        console.log(err)
      }
      
    }

    async function deleteReservation(reservationId){
      await apiClient.delete(`/deleteReservation/${reservationId}`);
        setReservations(reservations.filter((reservation)=>reservation.reservationId !== reservationId));
      }
      
      const editReservation=(reservation)=>{
    
        setEditingReservation(true);
          setCurrentReservation
          ({reservationId:reservation.reservationId,bus:reservation.busId,user:reservation.userLoginId,reservationType:reservation.reservationType,
            source:reservation.source, destination:reservation.destination,reservationDate:reservation.reservationDate})
         
      }
      
      const updateReservation = (reservationId,updatedReservation)=>{
      
        setEditingReservation(false);
        apiClient.put(`/${reservationId}`,updatedReservation).then((response)=>
        {
      
          console.log('reservation updated');
          setReservations(reservations.map((reservation)=>
        (reservation.reservationId === reservationId ? updateReservation : reservation)));
        })
        
      }

    const findByDate=(date,data)=>{
      setEditingReservation(true);
      apiClient.post(`/${date}`,data).then((response)=>{
        console.log('reservation date updated')
        setReservations(reservations.map((reservation)=>
        (reservation.date===date ? findByDate :date)));
      })
      
    }

    const [buses,setBuses]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get("/viewAllBuses").then((response)=>{
      setBuses(response.data);
    })},[])

    
const [editingBus,setEditingBus]=useState(false);

const initialBusFormState = {
  busId:0,
  arrivalTime:'',
  availableSeats:0,
  busName:'',
  busType:'',
  departureTime:'',
  driverName:'',
  routeFrom:'',
  routeTo:'',
  seats:''

}
const [currentBus,setCurrentBus] 
     =useState(initialBusFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addBus(bus){
  try{
  const response=await apiClient.post('/addBus',bus);
    setBuses([...buses,response.data]);
    console.log(buses);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteBus(busId){
  await apiClient.delete(`/deleteBus/${busId}`);
    setBuses(buses.filter((bus)=>bus.busId !== busId));
  }
  
  const editBus=(bus)=>{

    setEditingBus(true);
      setCurrentBus
      ({busId:bus.busId,arrivalTime:bus.arrivalTime,
        availableSeats:bus.availableSeats,busName:bus.busName,busType:bus.busType,departureTime:bus.departureTime,driverName:bus.driverName,routeFrom:bus.routeFrom,routeTo:bus.routeTo,seats:bus.seats})
     
  }
  
  const updateBus = (busId,updatedBus)=>{
  
    setEditingBus(false);
    apiClient.put(`/updateBus/${busId}`,updatedBus).then((response)=>
    {
  
      console.log('bus updated');
      setBuses(buses.map((bus)=>
    (bus.busId === busId ? updatedBus : bus)));
    })
    
  }

  const [userData,setUser]=useState([]);

  const [editingUser,setEditingUser]=useState(false);


    
    useEffect(()=>{apiClient.get('/viewAllUsers').then((response)=>{
      setUser(response.data);
    })},[])



const initialUserFormState = {
  userLoginId:0,
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    contact:'',
    email:''
}
const [currentUser,setCurrentuser] 
     =useState(initialUserFormState);

     async function addUser(user){
      try{
      const response=await apiClient.post('/addUser',user);
        setUser([...userData,response.data]);
        console.log(user);
        
      }catch(err){
        console.log(err)
      }
    }    




async function deleteUser(userLoginId){
  await apiClient.delete(`/deleteUser/${userLoginId}`);
    setUser(userData.filter((user)=>userData.userLoginId !== userLoginId));
  }
  
  const editUser=(user)=>{

    setEditingUser(true);
      setCurrentuser
      ({userLoginId:user.userLoginId,userName:user.userName,password:user.password,
        firstName:user.firstName,lastName:user.lastName,contact:user.contact,email:user.email})
     
  }
  
  const updateUser = (userLoginId,updatedUser)=>{
  
    setEditingUser(false);
    apiClient.put(`/updateUser/${userLoginId}`,updatedUser).then((response)=>
    {
  
      console.log('user updated');
      setUser(userData.map((user)=>
    (user.userLoginId === userLoginId ? updatedUser : user)));
    })
    
  }
  
  return(
    

    <section>
          
    {editingBus ? (

      <div>

        <h2>Edit Bus Form </h2>
         {JSON.stringify(currentBus)}
            <EditBusForm setEditingBus={setEditingBus} updateBus={updateBus} currentBus={currentBus}/>
                </div> ):(


    <div>
    <div className='container'>
  
    <div className='flex-row'>
      <div className='flex-large'>
      
    <BrowserRouter>

    <Routes>
      
      <Route path = '/' element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route path = "passenger"element={<Passenger/>}/>
      <Route path = "passengerlogin"element={<PassengerLogin/>}/>
      <Route path = "passengerController"element={<PassengerController/>}/>
      <Route path = "adminController"element={<AdminController/>}/>
      <Route path = "register"element={<Register/>}/>
      <Route path = "login"element={<Login/>}/>
      <Route path = "admin"element={<Admin/>}/>
      <Route path = "adminLogin"element={<AdminLogin/>}/>
      <Route path = "logoutuser"element={<LogoutUser/>}/>
      <Route path = "logoutadmin"element={<LogoutAdmin/>}/>
      
      

      <Route exact path = 'addBustoRoute' element={<AddBusForm/>}/>
      
     

          <Route  path="/addRoute" element={<AddRouteForm addRoute={addRoute}/>} />
         
         <Route path='/getAllRoutes' element={<RouteList 
    routeData={routeData} 
         editRoute={editRoute}
         deleteRoute={deleteRoute} />}>

         </Route>
         
         <Route path="/updateRoute/:routeId" element={<EditRouteForm setEditingRoute={setEditingRoute} currentRoute={currentRoute} updateRoute={updateRoute} /> }></Route>


        
          <Route exact path="/addFeedBack" element={<AddFeedbackForm addFeedback={addFeedback}/>} />
         
         <Route path="/viewAllFeedBacks" element={<FeedbackList 
    feedbackData={feedbacks} 
         editFeedback={editFeedback}
          />}>

         </Route>
         <Route path="/updateFeedBack/:feedBackId" element={<EditFeedbackForm setEditingFeedBack={setEditingFeedBack} currentFeedback={currentFeedback}updateFeedback={updateFeedback} /> }></Route>


         
          <Route exact path="/addReservation" element={<AddReservationForm addReservation={addReservation}/>} />
         
         <Route path='/viewAllReservations' element={<ReservationList  
    reservationData={reservations} 
         editReservation={editReservation}
         deleteReservation={deleteReservation} />}>

         </Route>
         <Route path="/updateReservation/:reservationId" element={<EditReservationForm setEditingReservation={setEditingReservation}currentReservation={currentReservation} updateReservation={updateReservation}/> }></Route>

         <Route path='/' element={<BusList 
    busData={buses} 
         editBus={editBus}
         deleteBus={deleteBus} />} ></Route>
          <Route exact path="/addBus" element={<AddBusForm addBus={addBus}/>} />

         <Route path='/viewAllBuses' element={<BusList 
    busData={buses} 
       editBus={editBus}  
         deleteBus={deleteBus} />}>
          

         </Route>
         
         <Route path="/updateBus/:busId" element={<EditBusForm setEditingBus={setEditingBus}  currentBus={currentBus} updateBus={updateBus}/> }></Route>

         

         <Route exact path="/addReservation" element={<AddReservationForm addReservation={addReservation}/>} />
         
         <Route path='/viewAllUsers' element={<UserList 
            userData={userData} 
         editUser={editUser}
         deleteUser={deleteUser} />}>

         </Route>
         <Route path="/updateUser/:userLoginId" element={<EditUserForm setEditingUser={setEditingUser}currentUser={currentUser} updateUser={updateUser} /> }></Route>
         
          

        </Routes>
    
    
    </BrowserRouter>
           
           
           
           </div>
    </div></div></div>)}
    </section>

  )
         }

         
         
  

export default App;