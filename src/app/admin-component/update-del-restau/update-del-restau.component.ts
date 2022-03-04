import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/pages/models/restaurant';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-update-del-restau',
  templateUrl: './update-del-restau.component.html',
  styleUrls: ['./update-del-restau.component.scss']
})
export class UpdateDelRestauComponent implements OnInit {

  restauList : Restaurant[];

  constructor(private apiBackService : ApiBackService) {
    this.restauList = [];
   }

  ngOnInit(): void {}

  
  saveRestauList(event : any){
    console.log(event);
    this.restauList = event;
  }

  deleteRestau(idRestau : number | undefined){
    this.apiBackService.deleteRestau(idRestau).subscribe( 
      resp =>{
      this.restauList = this.restauList.filter(restaus => restaus.id != idRestau)
    });
  }

}