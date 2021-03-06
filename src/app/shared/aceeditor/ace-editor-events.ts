import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AceEditorEventsService {
    private change$: EventEmitter<void>;
    private changeExtension$: EventEmitter<string>;

  constructor() {
    this.change$ = new EventEmitter<void>();
    this.changeExtension$ = new EventEmitter<string>();
   }

   getChange(): EventEmitter<void> {
     return this.change$;
   }

   getChangeExtension(): EventEmitter<string> {
     return this.changeExtension$;
   }
}