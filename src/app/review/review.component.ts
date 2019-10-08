import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../data.modal';
import { DataService } from '../data.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  book: User;
  bookId: number;
  text:string;
  constructor(private svc: DataService, private route: ActivatedRoute) { }
n
  ngOnInit() {
    this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.user.forEach(element => {
      if(element.id==this.bookId){
        this.book=element;
      }
    });
  }
  revBook(){
    this.book.txt.push(this.text);
    console.log(this.book.txt);
    this.reset();
  }
  reset(){
    this.text="";
  }

}
