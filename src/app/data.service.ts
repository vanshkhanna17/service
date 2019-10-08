import { Injectable } from '@angular/core';
import { User } from './data.modal';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
user: User[]=[];
u: User;

  constructor() { }
  add(name,auna,price){
    this.u = new User(name,auna,price);
    this.user.push(this.u);
    this.u.id = this.user.length -1;
    console.log(this.u.id);
  }
  disp(){
    return this.user;
  }
}
