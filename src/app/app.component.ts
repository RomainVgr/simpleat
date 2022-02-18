import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleat';
  dontShow: boolean = false;

  constructor(private router:Router){
    this.router.events.subscribe(e=>{
      //console.log(e);
      if(e instanceof NavigationEnd){
        console.log(e.url)
        if (e.url == "/signin") {
          this.dontShow = false;
        } else {
          this.dontShow = true;
        }
      }
    })
  }
}
