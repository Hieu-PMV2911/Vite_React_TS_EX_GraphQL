import {gql} from "@apollo/client"

export const CREATE_USER = gql`
	mutation createUser(
		$userName: String!, $password: String!, $email: String!, $address: String!, $image: String!){
		createUser(
			userName: $userName
			password: $password
			email: $email
			address: $address
			image: $image
		){
			userName
			password
			email
			address
			image
		}
	}
`



export const DELETE_USER = gql`
	mutation deleteUser($id: Int!){
		deleteUser(id: $id){
			id
		}
	}
`

export const UPDATE_USER = gql`
	mutation updateUser($id: Int!, $userName: String!,$passwordOld: String!,$passwordNew: String!, $email: String!, $address: String!, $image: String!){
		updateUser(id: $id,userNameNew: $userName,passwordNew: $passwordNew,emailNew: $email,addressNew: $address,imageNew: $image, passwordOld: $passwordOld){
			userName
			password
			email
			address
			image
		}
	}
`

export const CREATE_POST = gql`
	mutation createPost(
		$userName: String!, $title: String!, $description: String!, $image: String!){
		createPost(
			userName: $userName
			title: $title
			description: $description
			image: $image
		){
			userName
			title
			description
			image
		}
	}
`



export const DELETE_POST = gql`
	mutation deletePost($id: Int!){
		deletePost(id: $id){
			id
		}
	}
`

export const UPDATE_POST = gql`
	mutation updatePost($id: Int!, $userNameNew: String!, $titleNew: String!, $descriptionNew: String!, $imageNew: String!){
		updatePost(id: $id,userNameNew: $userNameNew,titleNew: $titleNew,descriptionNew: $descriptionNew,imageNew: $imageNew){
			userName
			title
			description
			image
		}
	}
`