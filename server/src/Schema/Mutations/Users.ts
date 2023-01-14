import { GraphQLInt } from 'graphql';
import { GraphQLString } from 'graphql';
import { GraphQLObjectType } from 'graphql';
import { TypeUser } from '../TypeDefs/Users';
import { Users } from '../../Entities/Users';


export const CREATE_USER = ({
	type: TypeUser,
	args: {
		email: {type: GraphQLString}, userName: {type: GraphQLString}, password: {type: GraphQLString}, address: {type: GraphQLString}, image: {type: GraphQLString}
	},
	async resolve(parent:any, args: any) {
		const {email, password, address, image, userName} = args;
		const user = await Users.insert({email, password, address, image, userName});
		return user;
	}
})

export const DELETE_USER = ({
	type: TypeUser,
	args: {
		id: {type: GraphQLInt}
	},
	async resolve(parent:any, args: any) {
		const id = args.id;
		return Users.delete(id);
	}
})

export const UPDATE_USER = ({
	type: TypeUser,
	args: {
		id: {type: GraphQLInt},emailNew: {type: GraphQLString}, userNameNew: {type: GraphQLString},passwordOld: {type: GraphQLString}, passwordNew: {type: GraphQLString}, addressNew: {type: GraphQLString}, imageNew: {type: GraphQLString}
	},
	async resolve(parent:any, args: any) {
		const {id,emailNew, userNameNew, passwordOld, passwordNew, addressNew,imageNew } = args;
		const user = await Users.findOne({where:{id: Number(id)}})
		const PswUser = user?.password;
		if(passwordOld === PswUser){
			await Users.update({id:id}, {email: emailNew,userName: userNameNew, password: passwordNew, address: addressNew,image: imageNew });
			return user;
		}
	}
})