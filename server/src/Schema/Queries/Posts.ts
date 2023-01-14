import { Posts } from './../../Entities/Posts';
import {GraphQLList, GraphQLInt} from "graphql"
import { TypePosts } from "../TypeDefs/Users"


export const QUERY_ALL_POSTS = {
	type: new GraphQLList(TypePosts),
	resolve(){
		return Posts.find();
	}
}

export const QUERY_POST = {
	type: new GraphQLList(TypePosts),
	args:{id: {type: GraphQLInt}},
	resolve(parent:any, args:any){
		const id = args.id;
		return Posts.find({where: {id: id}});
	}
}