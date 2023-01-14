import { GraphQLObjectType,GraphQLID,GraphQLString } from 'graphql';


export const TypeUser = new GraphQLObjectType({
	name: "Users",
	fields: () =>({
		id: {type: GraphQLID},
		userName: {type: GraphQLString},
		email: {type: GraphQLString},
		password: {type: GraphQLString},
		address: {type: GraphQLString},
		image: {type: GraphQLString},
	})
})

export const TypePosts = new GraphQLObjectType({
	name: "Posts",
	fields: () =>({
		id: {type: GraphQLID},
		userName: {type: GraphQLString},
		title: {type: GraphQLString},
		description: {type: GraphQLString},
		image: {type: GraphQLString},
	})
})