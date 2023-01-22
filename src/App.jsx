// import { useState } from 'react'
import './App.css'
// import FormInput from './Components/FormInput'
import SignUpForm from './Components/SignUpForm'
function App() {
  // const [value, setValue] = useState({
  //   username: '',
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // })
  // const Input =[
  //   {
  //     id: 1,
  //     placeholder: "User Name",
  //     type: "text",
  //     name: "username",
  //   },
  //   {
  //     id: 2,
  //     placeholder: "email",
  //     type: "text",
  //     name: "email",
  //   },
  //   {
  //     id: 3,
  //     placeholder: "password",
  //     type: "password",
  //     name: "password",
  //   },
  //   {
  //     id: 4,
  //     placeholder: "confirm Password",
  //     type: "password",
  //     name: "confirm password",
  //   }
  // ]

  // const onChannge=()=>{
  //   setValue({...value, [e.tartget.name]: e.target.value})
  // }

  return (
    <main className="App">
     {/* {
      Input.map((i)=>(
        <FormInput key={i.id}   />
      ))
     } */}
     <SignUpForm/>
    </main>
  )
}

export default App
