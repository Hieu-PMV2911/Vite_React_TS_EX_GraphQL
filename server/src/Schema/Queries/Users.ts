import { Users } from './../../Entities/Users';
import {GraphQLList, GraphQLInt} from "graphql"
import { TypeUser } from "../TypeDefs/Users"


export const QUERY_ALL_USERS = {
	type: new GraphQLList(TypeUser),
	resolve(){
		return Users.find();
	}
}

export const QUERY_USER = {
	type: new GraphQLList(TypeUser),
	args:{id: {type: GraphQLInt}},
	resolve(parent:any, args:any){
		const id = args.id;
		return Users.find({where: {id: id}});
	}
}