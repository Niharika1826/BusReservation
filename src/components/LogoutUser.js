
import { useNavigate } from "react-router-dom";

import '../App.css';

const LogoutUser=()=>{
    const nav=useNavigate();
    localStorage.removeItem('userDetails');
    nav('/')
}
export default LogoutUser;