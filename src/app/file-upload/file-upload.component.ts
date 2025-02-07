import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../fileupload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
  
    // Inject service 
    constructor(private fileUploadService: FileuploadService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange( event:any)  {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
}
