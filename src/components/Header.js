import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo192.png'
import { provider,auth } from "../firebase/config";
import { signInWithPopup,signOut } from "firebase/auth";
import './Header.css';
import { useState } from "react";
const Header = () => {
    const [isAuth,setIsAuth]=useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    function handleLogin()
   {
        signInWithPopup(auth,provider).then((result)=>{
           
            setIsAuth(true);
            localStorage.setItem("isAuth",true);
        })
    }
    function handleLogout()
    {
        signOut(auth);
        setIsAuth(false);
        localStorage.setItem("isAuth",false);
    }
  return (
    <div className="header d-flex flex-wrap justify-content-between border-bottom" style={{height:'80px',borderWidth:'5px'}}>
     <div className="d-flex flex-wrap">
        <Link to="/">
            <img src={logo} alt=" logo not found" height="70" width="70"/>
        </Link>
        <h3 className="fs-3 py-3 ms-4">BLOG</h3>
     </div>
     <nav className="py-3">
        
          <NavLink to="/" className="me-4 end" style={{textDecoration:'none',color:'black'}}>Home</NavLink> 
       
       
       
        {isAuth?(
        <>
         <NavLink className="me-4" to="/create" style={{textDecoration:'none',color:'black'}}>Create</NavLink>
         <button onClick={handleLogout} className="me-5 rounded bi bi-box-arrow-in-right bg-info p-2" style={{textDecoration:'none',color:'black'}}>Logout</button> 
        </>
        ):(
     <button onClick={handleLogin} className="me-5 bi bi-google bg-info p-2 rounded login" >Login</button>
        )}
        
        
     </nav>
    </div>
  )
};

export default Header
