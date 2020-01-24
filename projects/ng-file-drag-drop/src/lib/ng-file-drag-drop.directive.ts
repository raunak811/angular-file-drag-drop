import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ngFileDragDrop]'
})
export class NgFileDragDropDirective {

  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    this.fileOver = false;
    if(files.length > 0) {
      this.fileDropped.emit(files)
      //console.log(`You have choosen ${files.length} files`)
    }
    
  }

}
