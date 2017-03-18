import { ICheatsheet } from '../interfaces/icheatsheet';
import { ICategory } from '../interfaces/icategory';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryPipe implements PipeTransform {

  transform(categories:ICategory[], search: string): ICategory[] {
    if(!categories) return [];

    let words: string[] = search.split(" ");
    let list: ICategory[] = [];
    
    if(words.length === 1 && words[0] === "") return categories;

    if(words.length > 0){
      for(let word of words){
        for(let category of categories){
          let cat = this.filterCategory(category, word);
          if(cat.cheatsheets.length > 0) {
            list.push(cat);
          }
        }
      }
    }

    return list;
  }

  filterCategory(category:ICategory, word: string): ICategory{
    if(category.name.indexOf(word) >= 0) {
      return category;
    }

    let cheatsheetsList = category.cheatsheets.filter(c => {
      if(
        c.title.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.comment.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.code.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.language.name.toUpperCase().indexOf(word.toUpperCase()) >= 0
        ) {
          
        return c;
      }
    });
    
    return {
      id: category.id,
      name: category.name,
      cheatsheets: cheatsheetsList
    };
  }

}
