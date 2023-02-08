import React from 'react'
import { useState } from 'react'
import '../App.css'

const SignUp = (props,{handleChange}) => {
  const [focus, setFocus] = useState(false)

  const whenFocus =()=>{
    setFocus(true)
  }
  return (
   <div>
     <div>
            <label >
             <h3> {props.name}</h3>
              <input  
                 className='label input'
                //  className="input"
                 type={props.type}
                 name={props.name}
                 onChange={handleChange}
                 required={props.required}
                 pattern={props.pattern}
                 onFocus={()=> props.name === "confirmPassword" && setFocus(true)}
                 focus={focus.toString()}
                 onBlur={whenFocus}
              />
              <span className='err'>{props.errMsg}</span>
            </label>
        </div>
   </div>
  )
}

export default SignUp