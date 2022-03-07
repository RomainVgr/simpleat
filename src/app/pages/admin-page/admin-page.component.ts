import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiBackService } from 'src/app/services/api-back.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  sendId = new EventEmitter<number>();

  constructor( ) {
   
  }

  ngOnInit(): void {
  }
  sendIdRestau(idRestau : number){
    this.sendId.emit(idRestau);

  }

}
