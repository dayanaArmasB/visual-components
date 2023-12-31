import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']

})
export class UploadComponentComponent {
  files: File[] = []; 

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files);
    // if(event.addedFiles[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
    //   this.files.push(...event.addedFiles);
    // }else{
    //   this.alert.topCenter("Solo se admite archivo VF en formato XLSX",'warning')
    // }
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event),1);
  };
}



