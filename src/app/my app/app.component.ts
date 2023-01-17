import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Book } from '../in-memory-web-api_ex/book';
import { BookserviceService } from '../in-memory-web-api_ex/bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  mybook : Book[];
  constructor(private _bookservice:BookserviceService, private http:HttpClient){}
  ngOnInit(){
    this._bookservice.getbooks().subscribe(res=>this.mybook=res);
  }
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
}
