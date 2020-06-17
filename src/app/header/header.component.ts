import { Component,  OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string;
  filterText : string;
@Output() search = new EventEmitter();
@Output() filterButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(form : NgForm)
  {
    console.log(form);
    this.search.emit(form);
  }

  filterClicked($event)
  {
    this.filterText = $event.target.text;
    this.filterButton.emit(this.filterText);
  }
}

