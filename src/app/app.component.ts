import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-drag-and-drop';

  dragDropConfig = {
    showList:true,
    showProgress:true
  }

  getUploadedFiles(files) {
    console.log('My uploaded files',files)
  }
}
