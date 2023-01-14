import { GET_ALL_POSTS } from '../GraphQL/Queries'
import {useQuery, useMutation} from '@apollo/client'
import "./css/getAllUser.css"
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom"
import { DELETE_POST } from '../GraphQL/Mutation'

const Posts = () => {
  const {data,refetch} = useQuery(GET_ALL_POSTS);
  console.log(data)
  const [deletePost, {error}] = useMutation(DELETE_POST);
  const navigate = useNavigate();
  const handleClickDetail = (item:any) =>{
    localStorage.setItem('posts', JSON.stringify(item));
    navigate(`/detail-post/${item.id}`)
  }
  return (
      <div>
        {data && (
        <>
        <Navbar />
          {data.getAllPosts.map((item:any, index:number) =>(
            <div style={{paddingTop:"60px", borderTop:"2px solid gray"}} key={index}>
              <div className="card">
                <img src={item.image} alt={item.image} style={{maxHeight:"400px"}}/>
                <h1>{item.userName}</h1>
                <p className="title">{item.title}</p>
                <p>{item.description}</p>
                <p style={{display:"flex", height:"60px"}}> 
                  <button onClick={()=>{handleClickDetail(item)}}>
                  Details
                </button>
                <button style={{backgroundColor:"red"}} onClick={()=>{
                  deletePost({variables:{id: Number(item.id)}})
                  refetch();
                }}>
                  Delete Post
                </button>
                </p>
              </div>
            </div>
          ))}
        </>
        )}
      </div>
  )
}

export default Posts