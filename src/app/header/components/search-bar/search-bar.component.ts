import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

@Output() searchText = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeInput(search :string) {
    this.searchText.emit(search);
    console.log(search);
  }
}
