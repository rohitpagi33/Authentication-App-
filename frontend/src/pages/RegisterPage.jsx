// // src/pages/RegisterPage.js
// import React, { useState } from 'react';
// import { Form, Button, Alert, Container } from 'react-bootstrap';
// import OTPInput from '../components/OTPInput';
// import axios from 'axios';

// const RegisterPage = () => {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     mobile: '',
//   });
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendOtp = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/send-otp', { mobile: form.mobile });
//       setMessage('OTP sent to mobile');
//       setStep(2);
//     } catch (err) { 
//       setError(err.response?.data?.message || 'Failed to send OTP');
//     }
//   };

//   const handleVerifyAndRegister = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', { ...form, otp });
//       setMessage('Registration successful!');
//       setStep(3);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <>
//     <Container className="mt-4">
//       <h2>Register</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {message && <Alert variant="success">{message}</Alert>}

//       {step === 1 && (
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               value={form.username}
//               onChange={(e) => setForm({ ...form, username: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Mobile Number</Form.Label>
//             <Form.Control
//               type="tel"
//               value={form.mobile}
//               onChange={(e) => setForm({ ...form, mobile: e.target.value })}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" onClick={handleSendOtp}>
//             Send OTP
//           </Button>
//         </Form>
//       )}

//       {step === 2 && (
//         <Form>
//           <OTPInput otp={otp} setOtp={setOtp} />
//           <Button className="mt-3" onClick={handleVerifyAndRegister}>
//             Verify & Register
//           </Button>
//         </Form>
//       )}

//       {step === 3 && (
//         <Alert variant="success">
//           Registration complete. You can now <a href="/login">Login</a>.
//         </Alert>
//       )}
//     </Container>
//     </>
//   );
// };

// export default RegisterPage;



// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/styles.css';
import 'remixicon/fonts/remixicon.css';

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    mobile: '',
  });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/send-otp', { mobile: form.mobile });
      setMessage('OTP sent to mobile');
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  const handleVerifyAndRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { ...form, otp });
      setMessage('Registration successful!');
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
        <h1 className="login__title">Register</h1>

        {step === 1 && (
          <>
            <div className="login__content">
              {['fullName', 'username', 'email', 'mobile'].map((field, idx) => (
                <div key={idx} className="login__box">
                  <i className={`ri-${field === 'email' ? 'mail-line' : field === 'mobile' ? 'phone-line' : 'user-line'} login__icon`}></i>
                  <div className="login__box-input">
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className="login__input"
                      placeholder=" "
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    />
                    <label className="login__label">
                      {field === 'fullName' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                </div>
              ))}
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
            <button type="button" className="login__button" onClick={handleVerifyAndRegister}>
              Verify & Register
            </button>
          </>
        )}

        {step === 3 && (
          <p className="login__register">
            Registration complete. You can now <a href="/login">Login</a>.
          </p>
        )}

        {error && <p className="login__register" style={{ color: 'red' }}>{error}</p>}
        {message && <p className="login__register">{message}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
