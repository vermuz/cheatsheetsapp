import { ICheatsheet } from './icheatsheet';

export interface ICategory {
    id?: number;
    name: string;
    cheatsheets?: ICheatsheet[];
}
