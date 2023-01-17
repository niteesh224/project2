import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Testdata } from '../in-memory-web-api_ex/testdata';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Testdata),
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
