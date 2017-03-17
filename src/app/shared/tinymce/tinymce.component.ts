import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'tinymce',
  template: '<textarea id="{{elementId}}"></textarea>'
})
export class TinymceComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      menubar: false,
      statusbar: false,
      height: 200,
      plugins: ['link', 'paste', 'table'],
      content_style: ".mce-content-body {font-size:16px;font-family:'Helvetica Neue',Arial,sans-serif;}",
      skin_url: '/assets/skins/custom',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
