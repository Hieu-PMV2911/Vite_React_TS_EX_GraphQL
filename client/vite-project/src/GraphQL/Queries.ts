import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
	query getAllUser{
		getAllUser{
			id
			userName
			password
			email
			address
			image
		}
	}
`

export const GET_USER = gql`
	query getUser($id:number){
		getAllUser(id: $id){
			id
			userName
			password
			email
			address
			image
		}
	}
`


export const GET_ALL_POSTS = gql`
	query getAllPosts{
		getAllPosts{
			id
			userName
			title
			description
			image
		}
	}
`

export const GET_POST = gql`
	query getPost($id:number){
		getPost(id: $id){
			id
			userName
			title
			description
			image
		}
	}
`