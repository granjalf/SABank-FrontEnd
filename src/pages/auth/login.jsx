import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/authProvider';
import axios from 'axios';

import Input from './components/input';

const Login = () => {
  const { tokenValue } = useAuth();
  const [token, setToken] = tokenValue;
  const navigate = useNavigate();

  const [formData, setFormData ] = useState({
    email:'',
    password:''
  });

  const handleInputChange = (event)=>{
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]:value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/auth/login',JSON.stringify(formData));
      const result = response.data
      
      if(!result)
      {
        alert(result.message);
        return;
      }
            
      setToken(result.token);
      
      navigate("/", { replace: true });
    }catch(error){
      if(error.response.status === 401) alert(error.response.data.message);
    }finally{
      setFormData({
        email:'',
        password:''
      })
    }
    
    /*
    if(!result)
    {
      alert(result.message);
      return;
    }
    setToken(result.token);
    navigate("/", { replace: true });    
    */
  }

  /*
  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);
  */

  return(
    <>
      <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={handleSubmit}>
          <Input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleInputChange} iconClass={"fas fa-envelope"}/>
          <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} iconClass={"fas fa-lock"}/>
          <div className="row">
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
    </>
  );
};

/*
const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      setToken("this is a test token");
      navigate("/", { replace: true });
    };
  
    setTimeout(() => {
      handleLogin();
    }, 3 * 1000);
  
    return <>Login Page</>;
  };
  */

  export default Login;