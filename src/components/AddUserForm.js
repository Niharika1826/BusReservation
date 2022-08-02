import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/user';
import { Link } from "react-router-dom";


export default function AddUserForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
    userLoginId:0,
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    contact:'',
    email:''
}
 
const [user,setUser]=useState(initialFormState);

const [success,setSuccess] = useState(false);


const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setUser({...user,[name]:value});
}
 


const submitHandler=(event)=>{event.preventDefault();
if( !user.userLoginId || !user.userName || !user.password||!user.firstName||!user.lastName||
    !user.contact||!user.email) return;
 console.log(user+'from adduserform')
//props.addUser(user);
dispatch(addUser(user));
setSuccess(true);
setUser(initialFormState);

}
return (

<>

  
     {success ? (
            <section>

               <h1>Success!</h1>
               <p>
                <Link to = "/passengerLogin">Login In</Link>
               </p>


            </section>
        ):(

         <section>
   <form onSubmit={submitHandler}>

<label>userLoginId</label>
<input 
type='number'
name='userLoginId'
value={user.userLoginId}
onChange={handleInputChange}/>

<label>userName</label>
<input 
type='text'
name='userName'
value={user.userName}
onChange={handleInputChange}/>

<label>password</label>
<input 
type='text'
name='password'
value={user.password}
onChange={handleInputChange}/>

<label>firstName</label>
<input 
type='text'
name='firstName'
value={user.firstName}
onChange={handleInputChange}/>

<label>lastName</label>
<input 
type='text'
name='lastName'
value={user.lastName}
onChange={handleInputChange}/>

<label>contact</label>
<input 
type='text'
name='contact'
value={user.contact}
onChange={handleInputChange}/>

<label>email</label>
<input 
type='text'
name='email'
value={user.email}
onChange={handleInputChange}/>

<button>Add New User</button>

</form>
  
<p>
                Already registered?<br/>
                <Link to ="/passengerlogin">Login In</Link>
              </p>


     </section>
        )}
</>


)


}
