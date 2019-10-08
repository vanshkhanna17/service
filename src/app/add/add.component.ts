import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../data.modal';
  import { from } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string;
  auna: string;
  price: string; 
  constructor(private dataservice : DataService) { }

  ngOnInit() {
  }
  
  add(){
    this.dataservice.add(this.name,this.auna,this.price);
    this.reset();
  }
  reset(){
    this.name="";
    this.auna="";
    this.price="";
  }
}
