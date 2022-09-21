import UserModel, { User } from '../models/user.model';

export async function createUser(input: Partial<User>) {
    try {
        return await UserModel.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}
