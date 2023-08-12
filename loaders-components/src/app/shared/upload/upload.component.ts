import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
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
