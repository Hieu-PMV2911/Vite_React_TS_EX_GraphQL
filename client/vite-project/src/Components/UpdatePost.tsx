import React from 'react'
import "./css/createUser.css"
import {useMutation} from "@apollo/client"
import { UPDATE_POST } from '../GraphQL/Mutation'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const UpdatePost = () => {
  const [updatePost, {error}] = useMutation(UPDATE_POST);
  const [userNameNew, setUserNameNew] = useState("");
  const [titleNew, setTitleNew] = useState("");
  const [emailNew, setEmailNew] = useState("");
  const [descriptionNew, setDescriptionNew] = useState("");
  const [imageNew, setImageNew] = useState("");
  const navigate = useNavigate();
  const id:any = localStorage.getItem('posts')
  const posts = JSON.parse(id);
  return (
    <div>
        <div className="container">
          <div style={{color:"#000"}}>
          <h1>Update User</h1>
          <p>Please fill in this form to update an account.</p>
          </div>
          <hr/>
          <input type="text" placeholder={posts.userName} name="userName" id="psw-repeat" required onChange={(e) =>{setUserNameNew(e.target.value)}}/>

          <input type="text" placeholder={posts.email} name="email" id="email" required onChange={(e) =>{setEmailNew(e.target.value)}}/>

          <input type="text" placeholder={posts.password} name="password" id="password" required onChange={(e) =>{setTitleNew(e.target.value)}}/>

          <input type="text" placeholder={posts.passwordNew} name="password" id="password" required onChange={(e) =>{setDescriptionNew(e.target.value)}}/>

          <input type="text" placeholder={posts.image} name="Image" id="mage" required onChange={(e) =>{setImageNew(e.target.value)}}/>
          <hr/>

          <button type="submit" className="registerbtn" 
          onClick={()=>{
		updatePost({variables: {id:Number(posts.id),emailNew: emailNew, titleNew: titleNew , userNameNew: userNameNew ,descriptionNew: descriptionNew, imageNew: imageNew}})
            	navigate("/post")
          }}
          >Update</button>
        </div> 
    </div>
  )
}

export default UpdatePost