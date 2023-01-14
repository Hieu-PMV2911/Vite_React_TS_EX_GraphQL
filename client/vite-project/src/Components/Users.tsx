import React from 'react'
import { GET_ALL_USERS } from '../GraphQL/Queries'
import {useQuery, useMutation} from '@apollo/client'
import "./css/getAllUser.css"
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom"
import { DELETE_USER } from '../GraphQL/Mutation'

const GetAllUsers = () => {
  const {data,refetch} = useQuery(GET_ALL_USERS);
  const [deleteUser, {error}] = useMutation(DELETE_USER);
  const navigate = useNavigate();
  const handleClickDetail = (item:any) =>{
    localStorage.setItem('users', JSON.stringify(item));
    navigate(`/detail-user/${item.id}`)
  }
  return (
      <div>
        {data && (
        <>
        <Navbar />
          {data.getAllUser.map((item:any, index:number) =>(
            <div style={{paddingTop:"60px", borderTop:"2px solid gray"}} key={index}>
              <div className="card">
                <img src={item.image} alt={item.image} style={{maxHeight:"400px"}}/>
                <h1>{item.userName}</h1>
                <p className="title">{item.address}</p>
                <p>{item.email}</p>
                <p style={{display:"flex", height:"60px"}}> 
                  <button onClick={()=>{handleClickDetail(item)}}>
                  Details
                </button>
                <button style={{backgroundColor:"red"}} onClick={()=>{
                  deleteUser({variables:{id: Number(item.id)}})
                  refetch();
                  // console.log(typeof Numbẻ(item.id)
                }}>
                  Delete
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

export default GetAllUsers