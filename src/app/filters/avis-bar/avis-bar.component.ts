import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis-bar',
  templateUrl: './avis-bar.component.html',
  styleUrls: ['./avis-bar.component.scss']
})
export class AvisBarComponent implements OnInit {

  starStates: {stateSelectedUser : boolean, stateHoverUser : boolean}[];
  @Output() stateNumber = new EventEmitter();
  starStateNumber: number = 0;


  constructor() {

    this.starStates = [];

    for (let index = 0; index < 5; index++) {
      this.starStates.push(
        {
          stateSelectedUser : false,
          stateHoverUser : false
        }
      );
    }

  }

  ngOnInit(): void {
  }

  onMouseOver(index: number) {
    for (let i = 0; i < this.starStates.length ; i++) {
      if(i <= index) {
        this.starStates[i].stateHoverUser = true;
      } else {
        this.starStates[i].stateHoverUser = false;
      }
    }
  }

  onMouseLeave() {
    const tempTab = [];
    for (let index = 0; index < this.starStates.length; index++) {
      tempTab.push(
        {
          stateSelectedUser : this.starStates[index].stateSelectedUser,
          stateHoverUser : this.starStates[index].stateSelectedUser
        }
      );
    }
    this.starStates = [...tempTab];
  }

  onClickStar(starIndex: number) {
    this.starStateNumber = 0;
    for (let i = 0; i < this.starStates.length ; i++) {
      if(i <= starIndex) {
        this.starStates[i].stateSelectedUser = true;
        this.starStateNumber++;
      } else {
        this.starStates[i].stateSelectedUser = false;
      }
    }
    //console.log(`Rating : ${this.starStateNumber}`);
    this.stateNumber.emit(this.starStateNumber);
  }

}
