import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}from '@angular/Forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppService } from "./app.service";
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { SimpleComponent } from './simple-component/simple-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildcompComponent,
    SimpleComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
