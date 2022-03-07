import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiBackService } from './services/api-back.service';
import { AuthGuard } from './services/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleat';
  dontShow: boolean = false;

  constructor(public router:Router, private apiBackService : ApiBackService, private authgard : AuthGuard){
    this.router.events.subscribe(e=>{
      //console.log(e);
      if(e instanceof NavigationEnd){
        console.log(e.url)
        if (e.url == "/") {
          this.dontShow = false;
        } else {
          this.dontShow = true;
        }
      }
    })
  
}

  ngOnInit(): void {}
   }


