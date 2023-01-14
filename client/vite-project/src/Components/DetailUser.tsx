import {useNavigate} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { DELETE_USER } from '../GraphQL/Mutation'
const DetailUser = () => {
	const id:any = localStorage.getItem('users')
	const users = JSON.parse(id);
	// const {data} = useQuery(GET_USER);
	const [deleteUser, {error}] = useMutation(DELETE_USER);
	console.log(users)
	const navigate = useNavigate();
	return (
		<div style={{paddingTop:"60px"}}>
				<div className="card">
					<img src={users.image} alt="" style={{width:"100%"}}/>
					<h1>{users.userName}</h1>
					<p className="title">{users.address}</p>
					<p>{users.email}</p>
					<p><button style={{backgroundColor:"green", height:"100%"}}
					onClick={()=>{
						navigate(`/update-user/${users.id}`)
					}}
					>
						Update
					</button></p>
					<p><button style={{backgroundColor:"red", height:"100%"}}
					onClick={()=>{
						deleteUser({variables:{id: Number(users.id)}})
						navigate("/")
					}}
					>
						Delete
					</button></p>
				</div>
		</div>
	)
}

export default DetailUser