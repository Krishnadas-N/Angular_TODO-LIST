import { Component } from '@angular/core';
import { Item } from './item';
import {ItemComponent} from './ITEMS/item.component'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ItemComponent,CommonModule],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css', './ITEMS/item.component.css']
})
export class AppComponent {
  title = 'todo';
  errorMessage:string=''
  filter: 'all' | 'active' | 'done' = 'all';

  allItems:Item[] = [
    { description: 'eat', done: true },
  
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }
  

  addItem(description: string) {
    if(!description.match(/[a-zA-Z0-9]+$/)){
       this.errorMessage="Please enter a Valid task"
    }else{
    this.allItems.unshift({
      description,
      done: false
    });
    this.errorMessage=""
  }
  }

  remove(item: Item) {
    console.log('AppComponent - Remove item:', item);
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
