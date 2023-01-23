import React, { useState } from 'react';
import "./Form.css";
import { AiOutlineEye } from "react-icons/ai";
function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };


  const [formData, setFormData] = useState({
    Name: "",
    username: '',
    email: '',
    password: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send formData to the server
    console.log(formData);
  };

  return (
    <div className='main'>
      <h3>Sign up Form</h3>
      <form onSubmit={handleSubmit} className="formData">
        <label>
          <input
            placeholder='FirstName'
            className='input'
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='LastName'
            className='input'
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='UserNmae'
            className='input'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='Email'
            className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <hr className='line' />
        </label>
        <br />
      
       <label className='pass' >
          <input
            placeholder='password'
            className='input'
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <AiOutlineEye
          className='eye'
            onClick={togglePasswordVisibility}
            type={showPassword ? "text" : "password"}
          />
        </label>
        <hr className='line'/>
        <br />
        <button type="submit" className='signbttn' >Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
