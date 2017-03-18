import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AceEditorEventsService } from "./ace-editor-events";

declare var ace: any;

@Component({
  selector: 'ace-editor',
  template: '<div id="ace-editor"></div>',
  styles: [`
      #ace-editor { border: thin solid #BBB; }
  `]
})
export class AceeditorComponent implements OnInit {
editor: any;
  modelist: any;
  @Input() code: string = "";
  @Input() minLines: any = 10;
  @Input() maxLines:any = Infinity;
  @Input() fontSize:number = 16;
  @Input() autoScrollEditorIntoView: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() printMargin: boolean = false;
  @Input() showGutter: boolean = true;
  @Input() highlightGutterLine: boolean = false;
  @Input() highlightActiveLine: boolean = true;
  @Input() extension: string = 'txt';
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _aceEditorEventsService: AceEditorEventsService) { }

  ngOnInit() {
    ace.config.set('basePath', 'assets/ace-min-noconflict');
    ace.require("ace/edit_session").EditSession.prototype.$useWorker=false;
    this.editor = ace.edit("ace-editor");
    this.modelist = ace.require("ace/ext/modelist");
    
    this.setOptions();
    this.editor.setValue(this.code);
    this.editor.gotoLine(0);
    this.editor.blur();

    this.editor.on("change", () => {
      this.onEditorChange.emit(this.editor.getValue());
    });

    this._aceEditorEventsService.getChange().subscribe(
      () => this.setOptions()
    );

    this._aceEditorEventsService.getChangeExtension().subscribe(
      extension => this.setExtension(extension)
    );
  }

  setOptions() {
    this.editor.setOptions({
      minLines: this.minLines,
      maxLines: this.maxLines,
      fontSize: this.fontSize,
      autoScrollEditorIntoView: this.autoScrollEditorIntoView,
      readOnly: this.readOnly,
      printMargin: this.printMargin,
      showGutter: this.showGutter,
      highlightGutterLine: this.highlightGutterLine,
      highlightActiveLine: this.highlightActiveLine,
      printMarginColumn: false
    });
    let mode = this.modelist.getModeForPath('.' + this.extension).mode;
    this.editor.getSession().setMode(mode);
    
  }

  setExtension(extension) {
    let mode = this.modelist.getModeForPath('.' + extension).mode;
    this.editor.getSession().setMode(mode);
  }
}
