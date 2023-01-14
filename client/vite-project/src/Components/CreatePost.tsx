import "./css/createUser.css"
import {useMutation} from "@apollo/client"
import { CREATE_POST } from '../GraphQL/Mutation'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
  const [createPost, {error}] = useMutation(CREATE_POST);
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

          <input type="text" placeholder="Enter Title..." name="title" id="title" required onChange={(e) =>{setTitle(e.target.value)}}/>

          <input type="text" placeholder="Enter Description..." name="desc" id="desc" required onChange={(e) =>{setDescription(e.target.value)}}/>

          <input type="text" placeholder="Enter Image..." name="Image" id="mage" required onChange={(e) =>{setImage(e.target.value)}}/>
          <hr/>

          <button type="submit" className="registerbtn" 
          onClick={()=>{
            createPost({variables: {userName: userName, title: title, description: description, image: image}})
            navigate("/post")
          }}
          >Create</button>
        </div> 
    </div>
  )
}

export default CreatePost