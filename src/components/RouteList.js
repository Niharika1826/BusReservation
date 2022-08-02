import React ,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Grid,CardContent,Button } from '@mui/material';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import addingRoute from '../images/addingRoute.png';
import AddRoute from '../CSS/AddRoute.css';

import {
    retrieveRoute,

}from '../actions/route'
import AddBusForm from './AddBusForm';

export default function RouteList(props){
  
    const dispatch=useDispatch();
    
    
    const [currentRoute,setCurrentRoute]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    
    const routes = useSelector((state)=>state.route);
     
    

    useEffect(()=>{
        dispatch(retrieveRoute());
      },[]);

    
    const refreshData=()=>{
        setCurrentRoute(null);
        setCurrentIndex(-1);
    }
 

    const setActiveRoute= (route,index)=>{
        setCurrentRoute(route);
        setCurrentIndex(index);

    }

    
    


    const adminDetails=localStorage.getItem('adminDetails')

return(

    <div className='ad_image'>
         
    <div className='container mr-5'>

    <div className='card-deck'>
        <div className='col mb-2'>
            <div className='card h-100'>
                <h4 className='card-title'>Route List</h4>

    <Grid container spacing={2}
    direction="row"
    justify="flex-start"
    alignItems='flex-start'
    style={{margin:'.35rem',margin:'.5rem',margin:'.1rem'}}>





  {routes?.length > 0 ? (
    routes.map((route)=>(
    <Grid key={route.routeId}>
        <Card style={{width:'18rem',margin:'2rem',backgroundColor:'#aed234',color:'white'}}>
            <Card.Img variant='top'src={addingRoute}width='287px'height='180'/>

            <Card.Body>
                

                <Card.Text>

             <CardContent>
        RouteId : {route.routeId}<br/>
        Route From :{route.routeFrom}<br/>
        Route To :{route.routeTo}<br/>
        Route Distance:{route.distance}<br/>
        
        

      {adminDetails &&

        (
            <section>

<Button variant="primary">
            <Link to={'/addBus'}>
                Add Bus
                </Link>
          </Button>
        <br/><br/>


<Button variant="primary"onClick={()=>{props.editRoute(route)}}>
            
            <Link to = {`/updateRoute/${route.routeId}`}>
            Edit Route
            </Link>
      </Button>
    <br/><br/>

    <Button variant="primary"onClick={()=>{props.deleteRoute(route.routeId)}}>
        
            Delete Route
       
      </Button>
    <br/><br/>


        </section>

  
        )
}

</CardContent></Card.Text></Card.Body></Card></Grid>))):(
            <CardContent>
                No Routes
            </CardContent>
        )
        
               
            
        }
        </Grid>
        </div></div></div></div>

        </div>
        
     
)
    }







