import React, {useState} from 'react'
import SignUp from './Components/SignUp'
import './App.css'
import { useNavigate } from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    address:"",
    password: "",
    confirmPassword: "",
  })
 
  const field = [
    {
      id: 1,
      name: "Name",
      type: "text",
      label: "name",
      required: true,
      errMsg: "must be atleast three letter, number and special character not included",
      pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
    },
    {
      id: 2,
      name: "address",
      type: "text",
      label: "address",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "email",
      required: true,
      errMsg: "email has to be valid",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "password",
      required: true,
      errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "confirmPassword",
      pattern: data.password,
      required: true,
      errMsg: "must match with the password"
    },
  ];
  const handleSubmit = event => {
    event.preventDefault();
    console.log(data)
  };
  const handleChange = event => {
    setData(
      {
        ...data, [event.target.name]: event.target.value
      }
    );
  };
  return (
     <main className="main">
    <form onSubmit={handleSubmit} className="formData" >
      <h2>Register Here</h2>
      {field.map((field) => (
        <SignUp key={field.id} {...field} handleChange={handleChange} data={data[field.name]}/>
      ))}
       {/* <input type="checkbox" onChange={() => setData ({...data, admin: true})} /> */}
       <h3>forgot Password </h3>
      <button type="submit" className='signbttn' onClick={()=> navigate("signUp")} >sign up</button>
    </form>
  </main>
  )
}

export default Form