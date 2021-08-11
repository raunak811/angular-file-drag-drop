import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-file-drag-drop',
  templateUrl:'./ng-file-drag-drop.component.html',
  styleUrls: ['./ng-file-drag-drop.component.scss']
})
export class NgFileDragDropComponent implements OnInit {

  title = 'file-drag-drop';
  files:any = [];
  fileConfiguration:any = {}
  @Output() uploadedFiles = new EventEmitter<any>();
  @Input() fileConfig:any = {showProgress:true, showList:true , multiple:false}

  constructor() { }

  ngOnInit() {
  }

  onFileDropped($event) {
   
    for(let item of $event) {
      item.progress = 0;
      this.startProgress(item)
      this.files.push(item)
    }
    this.emitFiles()
  }

  startProgress(item) {
    if(item.progress != 100){
      setTimeout(()=>{
        item.progress+=10;
        this.startProgress(item)
      },100)
     
      
    }
  }

  // Emitting files
  emitFiles() {
    setTimeout(()=>{this.uploadedFiles.emit(this.files)},100);
  }

  deleteFile(index) {
    this.files.splice(index,1);
    this.emitFiles()
    
  }

  fileBrowseHandler(files) {
    for(let item of files) {
      item.progress = 0;
      this.startProgress(item)
      this.files.push(item)
    }
    this.emitFiles()
  }

}
