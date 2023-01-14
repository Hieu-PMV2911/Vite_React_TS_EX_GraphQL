import {useNavigate} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { DELETE_POST } from '../GraphQL/Mutation'

const DetailPost = () => {
	const id:any = localStorage.getItem('posts')
	const posts = JSON.parse(id);
	const [deletePost, {error}] = useMutation(DELETE_POST);
	const navigate = useNavigate();
	return (
		<div style={{paddingTop:"60px"}}>
				<div className="card">
					<img src={posts.image} alt="" style={{width:"100%"}}/>
					<h1>{posts.userName}</h1>
					<p className="title">{posts.title}</p>
					<p>{posts.description}</p>
					<p><button style={{backgroundColor:"green", height:"100%"}}
					onClick={()=>{
						navigate(`/update-post/${posts.id}`)
					}}
					>
						Update
					</button></p>
					<p><button style={{backgroundColor:"red", height:"100%"}}
					onClick={()=>{
						deletePost({variables:{id: Number(posts.id)}})
						navigate("/post")
					}}
					>
						Delete Post
					</button></p>
				</div>
		</div>
	)
}

export default DetailPost