import { ICheatsheet } from '../interfaces/icheatsheet';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cheatsheetFilter'
})
export class CheatsheetPipe implements PipeTransform {

  transform(cheatsheets:ICheatsheet[], search: string): ICheatsheet[] {
    if(!cheatsheets) return [];

    let words: string[] = search.split(" ");
    let list: ICheatsheet[];
    

    if(words.length > 0){
      list = cheatsheets.slice(0);
      for(let word of words){
        list = this.filterCheatsheet(list, word);
      }
    }

    return list;
  }

  filterCheatsheet(cheatsheets:ICheatsheet[], word: string): ICheatsheet[]{
    return cheatsheets.filter(c => {
      if(
        c.title.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.comment.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.code.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.language.name.toUpperCase().indexOf(word.toUpperCase()) >= 0
        || c.category.name.toUpperCase().indexOf(word.toUpperCase()) >= 0
        ) {
          
        return c;
      }
    });
  }

}
