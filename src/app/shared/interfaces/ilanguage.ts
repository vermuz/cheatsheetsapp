import { ICheatsheet } from './icheatsheet';

export interface ILanguage {
    id?: number;
    name: string;
    extension:string;
    cheatsheets?: ICheatsheet[];
}