// // src/pages/LoginPage.js
// import React, { useState } from 'react';
// import { Form, Button, Alert, Container } from 'react-bootstrap';
// import OTPInput from '../components/OTPInput';
// import { InputGroup } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const LoginPage = () => {
//   const [step, setStep] = useState(1);
//   const [identifier, setIdentifier] = useState(''); // username or mobile
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSendOtp = async () => {
//     try {
//       await axios.post('/api/auth/login-request', { identifier });
//       setMessage('OTP sent to your registered mobile');
//       setStep(2);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login request failed');
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const res = await axios.post('/api/auth/login-verify', { identifier, otp });
//       login(res.data.user);
//       setMessage('Login successful!');
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid OTP');
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <h2>Login</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {message && <Alert variant="success">{message}</Alert>}

//       {step === 1 && (
//         <Form>
//           <Form.Group>
//             <Form.Label>Username or Mobile Number</Form.Label>
//             <Form.Control
//               type="text"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button className="mt-3" onClick={handleSendOtp}>
//             Send OTP
//           </Button>
//         </Form>
//       )}

//       {step === 2 && (
//         <Form>
//           <OTPInput otp={otp} setOtp={setOtp} />
//           <Button className="mt-3" onClick={handleVerifyOtp}>
//             Verify & Login
//           </Button>
//         </Form>
//       )}
//     </Container>
   
//   );
// };

// export default LoginPage;



// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import '../assets/css/styles.css';
import 'remixicon/fonts/remixicon.css';

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/login-request', { identifier });
      setMessage('OTP sent to your registered mobile');
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Login request failed');
    }
  };

  // const handleVerifyOtp = async () => {
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/auth/login-verify', { identifier, otp });
  //     login(res.data.user);
  //     setMessage('Login successful!');
  //     navigate('/dashboard');
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Invalid OTP');
  //   }
  // };


const handleVerifyOtp = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login-verify', { identifier, otp });
    login(res.data.user, res.data.token); // Save token
    setMessage('Login successful!');
    navigate('/dashboard');
  } catch (err) {
    setError(err.response?.data?.message || 'Invalid OTP');
  }
};





  return (
    <div className="login">
      <img
        src="https://github.com/bedimcode/animated-login-form/blob/main/assets/img/login-bg.png?raw=true"
        alt="background"
        className="login__img"
      />
      <form className="login__form">
        <h1 className="login__title">Login</h1>

        {step === 1 && (
          <>
            <div className="login__content">
              <div className="login__box">
                <i className="ri-user-line login__icon"></i>
                <div className="login__box-input">
                  <input
                    type="text"
                    className="login__input"
                    placeholder=" "
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                  <label className="login__label">Username or Mobile</label>
                </div>
              </div>
            </div>

            <button type="button" className="login__button" onClick={handleSendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="login__content">
              <div className="login__box">
                <i className="ri-key-line login__icon"></i>
                <div className="login__box-input">
                  <input
                    type="text"
                    className="login__input"
                    placeholder=" "
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <label className="login__label">Enter OTP</label>
                </div>
              </div>
            </div>

            <button type="button" className="login__button" onClick={handleVerifyOtp}>
              Verify & Login
            </button>
          </>
        )}

        {error && <p className="login__register" style={{ color: 'red' }}>{error}</p>}
        {message && <p className="login__register">{message}</p>}
        <p className="login__register">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
