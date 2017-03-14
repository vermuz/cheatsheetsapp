import { ICheatsheet } from './icheatsheet';

export interface IUser {
    id?: number;
    username: string;
    email: string;
    password?: string;
    name: string;
    is_active?: boolean;
    admin?: boolean;
    register_at: string;
    cheatsheets?: ICheatsheet[];
}