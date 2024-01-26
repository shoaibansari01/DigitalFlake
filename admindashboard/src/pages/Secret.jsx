import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import './secret.css';

function Secret() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate('/login');
      } else {
        try {
          const { data } = await axios.post(
            'http://localhost:4000',
            {},
            { withCredentials: true }
          );

          if (!data.status) {
            removeCookie('jwt');
            navigate('/login');
          } else {
            toast(`HI ${data.user}`, {
              theme: 'dark',
              position: 'top-center',
              autoClose: 1000,
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = (event) => {
    event.preventDefault(); 
    Swal.fire({
      title: 'Logout?',
      text: 'Are you sure you want to log out ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#662671',
      cancelButtonColor: '#FFFFFF',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      customClass: {
        cancelButton: 'swal-text-color', 
      },
      
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie('jwt');
        navigate('/login');
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been logged out.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <>
      <div className="nav-container">
        <ul>
          <li className="logo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/img/Group 2609047.png'} alt="nav logo" />
            </Link>
          </li>
          <li className="login-icon">
            <div onClick={logOut}>
              <img src={process.env.PUBLIC_URL + '/img/Vector.png'} alt="logout icon" />
            </div>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default Secret;
