import React, { useState,  } from 'react';
import Image from './images.png'
function Home() {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file);
  };
  return (
    <div className='Upload'>
        <h1>welcome to eduglobal </h1>
      {image ? <img src={image} alt="uploaded" className="image" />: <img src={Image}/>}
     <label className='inputlabel'>
     <input type="file" onChange={handleChange}
     className="file"
     />
     <h3>choose file</h3>
     </label>
    </div>
  )
}

export default Home