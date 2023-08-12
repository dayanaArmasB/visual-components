import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loader1Component } from './loader1/loader1.component';
import { Loader2Component } from './loader2/loader2.component';
import { VerifModalComponent } from './verif-modal/verif-modal.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    Loader1Component,
    Loader2Component,
    VerifModalComponent,
    UploadComponentComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule
  ],
  exports: [
    Loader1Component,
    Loader2Component, 
    VerifModalComponent,
    UploadComponentComponent,
    UploadComponent
  ]
})
export class SharedModule { }
