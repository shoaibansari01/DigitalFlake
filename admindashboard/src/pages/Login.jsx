import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:"", 
        password:"",
    });

    const generateError = (err) => 
    toast.error(err, {
        position: "bottom-right",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/login",{
                ...values,
            },
            {
                withCredentials: true,
            });
            
            if(data) {
                if(data.errors){
                    const {email,password} = data.errors;
                    if(email) generateError(email);
                    else if (password) generateError(password);
                } else {
                    navigate("/");
                }
            }
        } catch(err) {
            console.log(err);
        }
    };

  return (
    <div className='main'>
    <div className='container'>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
        </div>
        <h2 className="heading">Welcome to Digitalflake Admin</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
            <label For="email">Email ID</label>
                <input type="email" 
                name='email' 
                onChange={(e)=>
                setValues({...values, [e.target.name]: e.target.value })
                } 
                />
            </div>

            <div>
            <label For="email">Password</label>
                <input type="password"
                 name='Password'
                onChange={(e)=>
                setValues({...values, [e.target.name]: e.target.value })
                }
                />
            </div>
            <p className="forgetP">
          <Link to="/reset-password">Forgot Password?</Link>
        </p>
            <button type='submit'>Log In</button>
            
            <span className='switch-page'>
                Already have an Account? <Link to="/register">Register</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
    </div>
  )
}

export default Login