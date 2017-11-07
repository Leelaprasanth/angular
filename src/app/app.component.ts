import { Component,OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AppService } from './app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService],
  
})
export class AppComponent {
  date= new Date();
  name='PL Prasanth';
  public color='green';
  public colors=['red','blue','green'];
  public cone=true;
  public ctwo=true;
  value=[];
  image=true;
  userText: string = 'Prasanth';
  constructor( private _appService:AppService){}
  ngOnInit(){
   // this.value=this._appService.myapp();
    this._appService.getdata()
    .subscribe(resEmployeeData=>this.value=resEmployeeData);
        
  }
   imageUrl = 'https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_960_720.jpg';
   myMethod(){
     console.log('event binding works');
    this.image=!this.image;
   }

   
}

