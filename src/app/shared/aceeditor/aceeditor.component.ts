import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'ace-editor',
  template: '<div id="ace-editor"></div>'
})
export class AceeditorComponent implements OnInit {
editor: any;
  modelist: any;
  @Input() code: string;
  @Input() minLines: any = 10;
  @Input() maxLines:any = Infinity;
  @Input() fontSize:number = 16;
  @Input() autoScrollEditorIntoView: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() extension: string = 'js';
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    ace.config.set('basePath', '../node_modules/ace-min-noconflict');
    this.editor = ace.edit("ace-editor");
    this.modelist = ace.require("ace/ext/modelist");
    this.editor.setOptions({
      minLines: this.minLines,
      maxLines: this.maxLines,
      fontSize: this.fontSize,
      autoScrollEditorIntoView: this.autoScrollEditorIntoView,
      readOnly: this.readOnly
    });
    let mode = this.modelist.getModeForPath('.' + this.extension).mode;
    this.editor.getSession().setMode(mode);
    this.editor.setValue(this.code);
    this.editor.on("change", () => {
      this.onEditorChange.emit(this.editor.getValue());
    });
  }
}
