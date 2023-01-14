import React from 'react'
import "./css/createUser.css"
import {useMutation} from "@apollo/client"
import { CREATE_USER } from '../GraphQL/Mutation'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const CreateUser = () => {
  const [createUser, {error}] = useMutation(CREATE_USER);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  return (
    <div>
        <div className="container">
          <div style={{color:"#000"}}>
          <h1>Create User</h1>
          <p>Please fill in this form to create an account.</p>
          </div>
          <hr/>
          <input type="text" placeholder="User Name..." name="userName" id="psw-repeat" required onChange={(e) =>{setUserName(e.target.value)}}/>

          <input type="text" placeholder="Enter Email..." name="email" id="email" required onChange={(e) =>{setEmail(e.target.value)}}/>

          <input type="password" placeholder="Enter Password..." name="psw" id="psw" required onChange={(e) =>{setPassword(e.target.value)}}/>

          <input type="text" placeholder="Enter Address..." name="Address" id="address" required onChange={(e) =>{setAddress(e.target.value)}}/>

          <input type="text" placeholder="Enter Image..." name="Image" id="mage" required onChange={(e) =>{setImage(e.target.value)}}/>
          <hr/>

          <button type="submit" className="registerbtn" 
          onClick={()=>{
            createUser({variables: {userName: userName, password: password, email: email, address: address, image: image}})
            navigate("/")
          }}
          >Create</button>
        </div> 
    </div>
  )
}

export default CreateUser