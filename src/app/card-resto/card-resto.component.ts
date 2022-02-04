import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.scss']
})
export class CardRestoComponent implements OnInit {

  @Input() restaurant : any ; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.restaurant);
    
  }

}
