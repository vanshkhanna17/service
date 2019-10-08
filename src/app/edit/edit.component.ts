import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../data.modal';
import { element } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name: string;
  auna: string;
  price: string;
  book: User;
  bookId: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.user.forEach(element => {
      if(element.id==this.bookId){
        this.book=element;
      }
    });
    this.name=this.book.name;
    this.auna=this.book.auna;
    this.price=this.book.price;
  }

  editBook() {
    this.book.name=this.name;
    this.book.auna=this.auna;
    this.book.price=this.price;
    this.svc.user[this.svc.user.indexOf(this.book)] = this.book;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
    this.reset();
  }
  reset(){
    this.name="";
    this.auna="";
    this.price="";
  }
}