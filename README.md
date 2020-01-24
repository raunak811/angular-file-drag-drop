
# File Drag Drop

Drag and drop single or multiple files in angular
Either use our predefined interface or If you have your own interface just use directive only.

## Getting Started

**Install via npm**

>npm install --save ng-file-drag-drop

**Import the module**

Import in `app.module.ts` or respective module if you are using lazy loading.

    import {NgFileDragDropModule} from  'ng-file-drag-drop';
    
    @NgModule({
	    declarations: [AppComponent,],
		imports: [NgFileDragDropModule....],
		providers: [],
		bootstrap: [AppComponent]
	})
	export  class  AppModule { }

## Use in HTML

**If you want to use our interface**

Use `ng-file-drag-drop` selector and bind with `uploadedFiles` event.

    <ng-file-drag-drop (uploadedFiles)="getUploadedFiles($event)" [fileConfig]="dragDropConfig"> </ng-file-drag-drop>
`fileConfig` is used to configure some properties to show/hide uploaded files as shown below:

    dragDropConfig = {
	    showList:true,
	    showProgress:false
	}
It should be defined in component/service file.

**If you have your own custom interface**

Just use `ngFileDragDrop` directive and bind with `fileDropped` event emitter as shown below:

    <div  class="fileDropZone"  ngFileDragDrop  (fileDropped)="getUploadedFiles($event)">
	    <input  type="file"  multiple>Drag Drop files Here
	</div>

## Use in component
Bind any method with `fileDropped` event. For example here we have used *getUploadedFiles* in our case.
	
    getUploadedFiles(files) {
	    console.log('My uploaded files',files)
	}

## `fileConfig` configurations:

|  Property| Behaviour | Default |
|--|--|--|
| showList | Show/Hide uploaded file list |true
| showProgress      | Show/Hide progress bar  |true


