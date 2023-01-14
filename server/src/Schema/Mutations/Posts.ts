import { Posts } from './../../Entities/Posts';
import { GraphQLInt } from 'graphql';
import { GraphQLString } from 'graphql';
import { GraphQLObjectType } from 'graphql';
import { TypeUser, TypePosts } from '../TypeDefs/Users';


export const CREATE_POST = ({
	type: TypePosts,
	args: {
		userName: {type: GraphQLString}, title: {type: GraphQLString}, description: {type: GraphQLString}, image: {type: GraphQLString}
	},
	async resolve(parent:any, args: any) {
		const {description, title, image, userName} = args;
		const post = await Posts.insert({description, title, image, userName});
		return post;
	}
})

export const DELETE_POST = ({
	type: TypePosts,
	args: {
		id: {type: GraphQLInt}
	},
	async resolve(parent:any, args: any) {
		const {id} = args;
		return Posts.delete(id);
	}
})

export const UPDATE_POST = ({
	type: TypePosts,
	args: {
		id: {type: GraphQLInt},userNameNew: {type: GraphQLString},titleNew: {type: GraphQLString}, descriptionNew: {type: GraphQLString}, imageNew: {type: GraphQLString}
	},
	async resolve(parent:any, args: any) {
		const {id,titleNew, userNameNew, descriptionNew,imageNew } = args;
		const post = await Posts.findOne({where:{id: Number(id)}})
		const idOld = post?.id;
		if(idOld === id){
			await Posts.update({id:id}, {userName: userNameNew, title: titleNew, description: descriptionNew,image: imageNew });
			return post;
		}
	}
})