import { IUser } from './iuser';
import { ILanguage } from './ilanguage';
import { ICategory } from './icategory';

export interface ICheatsheet {
    id?: number;
    title: string;
    comment: string;
    code: string;
    category: ICategory;
    language: ILanguage;
    user?:IUser;
    created_at?: string;
    updated_at?: string;
    is_deprecated?: boolean;
}
