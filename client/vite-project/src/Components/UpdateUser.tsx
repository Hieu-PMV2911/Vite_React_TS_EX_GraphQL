import React from 'react'
import "./css/createUser.css"
import {useMutation} from "@apollo/client"
import { UPDATE_USER } from '../GraphQL/Mutation'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const UpdateUser = () => {
  const [updateUser, {error}] = useMutation(UPDATE_USER);
  const [userNameNew, setUserNameNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [emailNew, setEmailNew] = useState("");
  const [addressNew, setAddressNew] = useState("");
  const [imageNew, setImageNew] = useState("");
  const navigate = useNavigate();
  const id:any = localStorage.getItem('users')
  const users = JSON.parse(id);
  return (
    <div>
        <div className="container">
          <div style={{color:"#000"}}>
          <h1>Update User</h1>
          <p>Please fill in this form to update an account.</p>
          </div>
          <hr/>
          <input type="text" placeholder={users.userName} name="userName" id="psw-repeat" required onChange={(e) =>{setUserNameNew(e.target.value)}}/>

          <input type="text" placeholder={users.email} name="email" id="email" required onChange={(e) =>{setEmailNew(e.target.value)}}/>

          <input type="password" placeholder={users.password} name="password" id="password" required onChange={(e) =>{setPasswordOld(e.target.value)}}/>

          <input type="password" placeholder={users.passwordNew} name="password" id="password" required onChange={(e) =>{setPasswordNew(e.target.value)}}/>

          <input type="text" placeholder={users.address} name="Address" id="address" required onChange={(e) =>{setAddressNew(e.target.value)}}/>

          <input type="text" placeholder={users.image} name="Image" id="mage" required onChange={(e) =>{setImageNew(e.target.value)}}/>
          <hr/>

          <button type="submit" className="registerbtn" 
          onClick={()=>{
		updateUser({variables: {id:Number(users.id),email: emailNew,passwordOld: passwordOld, passwordNew: passwordNew , userName: userNameNew ,address: addressNew, image: imageNew}})
            navigate("/")
          }}
          >Update</button>
        </div> 
    </div>
  )
}

export default UpdateUser