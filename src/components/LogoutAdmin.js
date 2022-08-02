import { useNavigate } from "react-router-dom";

import '../App.css';

const LogoutAdmin=()=>{
    const nav=useNavigate();
    localStorage.removeItem('adminDetails');
    nav('/')
}
export default LogoutAdmin;