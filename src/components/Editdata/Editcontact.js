import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify';


export const Editcontact = () => {
    const {id}  = useParams();
    
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find( contact =>contact.id===parseInt(id));


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState('');

    useEffect( ()=>{

      if(currentContact){
        setname(currentContact.name);
        setemail(currentContact.email);
        setphone(currentContact.phone);

      }
    },[currentContact]);

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
         id:parseInt(id),
         name,
         email,
         phone
     
       }
     console.log(data);
     
     dispatch({ type:"UPDATE_CONTACT",payload:data})
     toast.success(" student added successfully...")

      }


  return (
    <div>

  {currentContact?(

   
    <>
    <h1>Edit Contact {id}</h1>
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
    <input type="submit" value="Upata Student" className='btn btn-primary'></input>
    <NavLink to="/" className="btn btn-danger">Cancle</NavLink>
  </div>

  </form>

</div>
</>
 ):(
  <h1>Student {id} Is Not Found</h1>
 )}

    </div>
  )
}
