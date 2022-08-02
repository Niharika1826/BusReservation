import { Dropdown } from "react-bootstrap";


function Login (){

  return(

    <div align='center' >
       <div className="rg_image">
    <br/><br/><br/><br/>
     <h3>Please Select Your Role</h3><br/><br/>
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           User Role
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "passengerLogin">Passenger</Dropdown.Item><br/><br/>
            <Dropdown.Item href = "adminLogin">Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div> 
    </div>
  )

}

export default Login;