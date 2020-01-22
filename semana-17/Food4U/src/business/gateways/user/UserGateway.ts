import { User } from '../../entities/User';

export interface UserGateway {
    createUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    verifyUserExist(id: string): Promise<boolean>;
    followUser(followerUserId: string, followedUserId: string): Promise<void>;
};