import React ,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



import {
    retrieveUser,

}from '../actions/user'
export default function UserList(props){
  
  
    
    
    const [currentUser,setCurrentUser]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    
    const userData = useSelector((state)=>state.userData);
     

       

    
    const refreshData=()=>{
        setCurrentUser(null);
        setCurrentIndex(-1);
    }
 

    const setActiveUser= (user,index)=>{
        setCurrentUser(user);
        setCurrentIndex(index);

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

       
  {props.userData?.length > 0 ? (
    props.userData.map((user)=>(
        <Grid key={user.userLoginId}>
        <Card style={{width:'18rem',margin:'2rem',backgroundColor:'#aed234',color:'white'}}>
            <Card.Img variant='top'src={buslogo2}width='287px'height='180'/>

            <Card.Body>
                

                <Card.Text>

             <CardContent>
    
        UserLoginId:{user.userLoginId}<br/><br/>
        UserName:{user.userName}<br/><br/>
        Password:{user.password}<br/><br/>
        FirstName:{user.firstName}<br/><br/>
        LastName:{user.lastName}<br/><br/>
        Contact:{user.contact}<br/><br/>
        Email:{user.email}<br/><br/>

        </CardContent></Card.Text></Card.Body></Card></Grid>))):(
            <CardContent>
                No Reservations
            </CardContent>
        )
        
        
     </section>

)




}