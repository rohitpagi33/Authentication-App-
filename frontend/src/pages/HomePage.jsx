// src/pages/HomePage.js
import React from 'react';
import '../assets/css/styles.css';
import { Container } from 'react-bootstrap';

const HomePage = () => (
  <div>
  <img
        src="https://github.com/bedimcode/animated-login-form/blob/main/assets/img/login-bg.png?raw=true"
        alt="background"
        className="login__img"
      />
      
  <Container className="mt-4">
    <h2>Welcome to LoginApp</h2>
    <p>Please register or log in to continue.</p>
  </Container>
  </div>
);

export default HomePage;
