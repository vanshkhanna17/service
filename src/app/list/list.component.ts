import { Component, OnInit } from '@angular/core';
import { User } from '../data.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  array: User[]=[];
  txt:string;
  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.array = this.dataservice.disp();
  }
  rev(i){
    this.array[i].txt.push(this.txt);
    console.log(this.array[i].txt);
  }
  remv(i){
    this.array.splice(i,1);
  }
 
}
