import { Injectable } from '@angular/core';
import{Http,Response} from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private _url: string="https://jsonplaceholder.typicode.com/users";
myapp():string{
  return "hello this is creating using Dependency injection and services"
}
  constructor(private _http:Http) {  }
  getdata(){
    return this._http.get(this._url)
    .map((response:Response)=>response.json());
  }
}
