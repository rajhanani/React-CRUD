import React from 'react'
import "./Addcontact.css";
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Addcontact = () => {
      const [name, setname] = useState("");
      const [email, setemail] = useState("");
      const [phone, setphone] = useState('');


  const contacts = useSelector( (state)=>state);
  console.log(contacts)

  const dispatch = useDispatch()
  

  const handlesubmit = (e)=>{
 e.preventDefault();

 if(!email || !name || !phone){
return toast.warning( "This all fileds are required...")
  }

  const checkemail = contacts.find( (contacts)=>contacts.email===email && email)

  if(checkemail){
     return toast.warning("This Email is alredy Exists");
  }

  const data = {
    id:contacts[contacts.length -1].id+1,
    name,
    email,
    phone

  }
console.log(data);

dispatch({ type:"ADD_CONTACT",payload:data})
toast.success(" student added successfully...")
// history.push("/")

  };


  return (
    <div>
        <h1>Add Contact</h1>
<div className='form'>

<form onSubmit={handlesubmit}> 
  <div className='form-group'>
    
    <input type="text" placeholder='Enter Name' value={name} onChange={ (e)=>setname(e.target.value)} className='form-control'></input>
  </div>

  <div className='form-group'>
    <input type="email" placeholder='Enter Email' value={email} onChange={ (e)=>setemail(e.target.value)} className='form-control'></input>
  </div>

  <div className='form-group'>
    <input type="number" placeholder='Enter Phone' value={phone} onChange={ (e)=>setphone(e.target.value)} className='form-control'></input>
  </div>

  <div className='form-group'>
    <input type="submit" value="Add Student" className='btn btn-primary'></input>
  </div>
  </form>

</div>

    </div>
  )
}
