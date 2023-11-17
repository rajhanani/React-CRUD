import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "./StuData.css"

export const StuData = () => {
const contacts = useSelector( (state)=>state)
const dispatch = useDispatch();

const deletebutton=(id)=>{
  dispatch({type:"DELETE_CONTACT",payload:id});
  alert("deleted sucessfully")

}
  return (
    <div>

<div className='container'>
    <div className='row'>

<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
        contacts.map( (contact,id)=>(
    <tr key={id}>
      <th>{id+1}</th>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
  <Link to={`/editcontact/${contact.id}`} className="btn btn-outline-primary">Edit</Link>
  <button type='submit' className="btn btn-outline-danger" onClick={ ()=>deletebutton(contact.id)} >Delete</button>
      </td>
    </tr>
  ))}
    
  </tbody>
</table>
</div>
        
        
          </div>     
    </div>


</div>

    
  )
}
