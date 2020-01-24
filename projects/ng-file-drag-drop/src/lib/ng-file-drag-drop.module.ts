import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgFileDragDropComponent } from './ng-file-drag-drop.component';
import { NgFileDragDropDirective } from './ng-file-drag-drop.directive';
import { FileProgressComponent } from './file-progress.component';



@NgModule({
  declarations: [NgFileDragDropComponent, NgFileDragDropDirective, FileProgressComponent],
  imports: [CommonModule],
  exports: [NgFileDragDropComponent,NgFileDragDropDirective]
})
export class NgFileDragDropModule { }
