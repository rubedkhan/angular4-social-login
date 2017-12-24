import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  items = ["Angular 4", "React"];
  newItems = "";
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
  }

  addItems(){
     if(this.newItems){
         this.items.push(this.newItems);
         this.newItems = "";
     }
  }

  removeItem(index){
         this.items.splice(index, 1);
     
  }

}
