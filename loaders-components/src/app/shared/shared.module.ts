import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loader1Component } from './loader1/loader1.component';
import { Loader2Component } from './loader2/loader2.component';
import { VerifModalComponent } from './verif-modal/verif-modal.component';


@NgModule({
  declarations: [
    Loader1Component,
    Loader2Component,
    VerifModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Loader1Component,
    Loader2Component, 
    VerifModalComponent
  ]
})
export class SharedModule { }
