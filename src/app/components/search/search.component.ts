import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchTerm!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.search.emit(this.searchTerm);
  }
}
