import {GraphQLSchema, GraphQLObjectType} from "graphql"
import {QUERY_ALL_USERS, QUERY_USER } from "./Queries/Users"
import {CREATE_USER,DELETE_USER, UPDATE_USER } from "./Mutations/Users"

import {QUERY_ALL_POSTS, QUERY_POST } from "./Queries/Posts"
import {CREATE_POST,DELETE_POST, UPDATE_POST } from "./Mutations/Posts"


const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		getAllUser: QUERY_ALL_USERS,
		getUser: QUERY_USER,
		getAllPosts: QUERY_ALL_POSTS,
		getPost: QUERY_POST,
	}
})

const RootMutation = new GraphQLObjectType({
	name: "RootMutation",
	fields: {
		createUser: CREATE_USER,
		deleteUser: DELETE_USER,
		updateUser: UPDATE_USER,
		createPost: CREATE_POST,
		deletePost: DELETE_POST,
		updatePost: UPDATE_POST,
	}
})

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
})