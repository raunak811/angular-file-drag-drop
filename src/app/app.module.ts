import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {NgFileDragDropModule} from '../../projects/ng-file-drag-drop/src/lib/ng-file-drag-drop.module'
import {NgFileDragDropModule} from 'ng-file-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFileDragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
