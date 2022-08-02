import { Dropdown } from "react-bootstrap";



function Register (){

  return(
    
    <div className="container">
   <div className="rg_image">
       <div align='center' >
        
       <br/><br/><br/><br/><br/><br/><br/>
        <h3>Please Select Your Role</h3><br/><br/>
        <Dropdown padding='3px'>
          <ul>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
          
           User Role 
          </Dropdown.Toggle>

          <Dropdown.Menu>
           <li> <Dropdown.Item href = "passenger">Passenger</Dropdown.Item></li>
           <li> <Dropdown.Item href = "admin">Admin</Dropdown.Item></li>
          </Dropdown.Menu>
          </ul>
        </Dropdown>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  

        </div> 

        </div>
        </div>
  )

}

export default Register;