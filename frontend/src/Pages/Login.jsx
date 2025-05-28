import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Scoped CSS file

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const captchaCanvas = useRef(null);
  const navigate = useNavigate();

  // Function to generate a random captcha and render it to canvas
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaAnswer(captchaText);
  
    const ctx = captchaCanvas.current.getContext("2d");
  
    // Set the background color to white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, captchaCanvas.current.width, captchaCanvas.current.height);
  
    // Array of fonts for randomness
    const fonts = [
      "Arial Black",
      "Comic Sans MS",
      "Impact",
      "Georgia",
      "Courier New",
      "Verdana",
    ];
  
    let x = 10; // Starting X position
    const fontSize = 30;
  
    for (let i = 0; i < captchaText.length; i++) {
      const y = Math.random() * 20 + 30; // Random Y position for variation
      const rotation = (Math.random() - 0.5) * 0.4; // Random rotation
  
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.font = `${fontSize}px ${fonts[Math.floor(Math.random() * fonts.length)]}`; // Random font
      ctx.fillStyle = `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`; // Random color
      ctx.fillText(captchaText[i], 0, 0);
      ctx.restore();
  
      x += fontSize + Math.random() * 10; // Increment X position with random spacing
    }
  
    // Add distortion lines
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.moveTo(
        Math.random() * captchaCanvas.current.width,
        Math.random() * captchaCanvas.current.height
      );
      ctx.lineTo(
        Math.random() * captchaCanvas.current.width,
        Math.random() * captchaCanvas.current.height
      );
      ctx.strokeStyle = `rgba(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200}, 0.7)`; // Random color for lines
      ctx.lineWidth = Math.random() * 2 + 1;
      ctx.stroke();
    }
  
    // Add random dots for further distortion
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * captchaCanvas.current.width,
        Math.random() * captchaCanvas.current.height,
        Math.random() * 3,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200}, 0.7)`; // Random color for dots
      ctx.fill();
    }
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput === captchaAnswer) {
      console.log("Login Successful");
      setErrorMessage("");
    } else {
      setErrorMessage("Captcha is incorrect");
    }
  };

  // Navigate to the signup page
  const toggleForm = () => {
    navigate("/signup");
  };

  // Generate captcha on page load
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Refresh captcha when button is clicked
  const refreshCaptcha = () => {
    generateCaptcha();
    setCaptchaInput(""); // Clear the captcha input field
    setErrorMessage(""); // Clear any error message
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-field captcha-field">
            <label>Captcha:</label>
            <div className="captcha-wrapper">
              <canvas ref={captchaCanvas} width="275" height="60" className="captcha-canvas"></canvas>
              <button type="button" onClick={refreshCaptcha} className="circle-refresh-btn">
                &#x21bb;
              </button>
            </div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
        <div className="signup-container">
          <p>
            <button onClick={toggleForm}>Don't have an account? Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
