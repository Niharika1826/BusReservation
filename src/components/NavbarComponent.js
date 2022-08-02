import Nav from 'react-bootstrap/Nav';

import { NavDropdown } from 'react-bootstrap';




  export default  function MainPageNav() {



  return (


<Nav  className="justify-content-end" variant="pills" activeKey="Home" >

      <Nav.Item>

        <Nav.Link className='flex-right' eventKey="Home" href="/">

          Home

        </Nav.Link>

      </Nav.Item>

      <Nav.Item>

        <Nav.Link eventKey="AboutUs" title="Item" href="/aboutUs">

          About Us

        </Nav.Link>

      </Nav.Item>

      <Nav.Item>

        <Nav.Link eventKey="ContactUs" title="Item"  href="/contactUs">
          Contact Us
        </Nav.Link>
      </Nav.Item>
      <NavDropdown  title="GetStarted" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" href="/register">Register</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" href="/login">login</NavDropdown.Item>
      </NavDropdown>
       <Nav.Item>
      </Nav.Item>

      </Nav>
)
  }