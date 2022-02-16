import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.scss']
})
export class CardRestoComponent implements OnInit {

  @Input() restaurant : any ;
  @Input() likeResto: any; 
  @Output() clickLike = new EventEmitter<boolean>();
  isLiked : boolean = false;

  constructor() { }

  ngOnInit(): void {

    console.log(this.restaurant);
    
  }
  onClickLike() {
    console.log('click');
    this.isLiked = !this.isLiked;
    this.clickLike.emit(this.isLiked);
  }



}
