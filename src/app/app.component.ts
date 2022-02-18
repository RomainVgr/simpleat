import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiBackService } from './services/api-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleat';
  dontShow: boolean = false;
  searchParam: any;
  listResto: any;


  constructor(private router:Router, private apiBackService : ApiBackService){
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
  


  this.searchParam = {
    searchText : "",
    filterText : "first"
  }

}

  ngOnInit(): void {

    this.listResto = this.apiBackService.getRestaurants();

    console.log(this.listResto)
  }

  // onSearchResto(searchText: string,) {
  //   this.searchParam.searchText = searchText;
  //   const rawData = this.apiBackService.getRestaurants();
    
  //   this.listResto = rawData.filter(resto =>
  //      resto.name.toLowerCase().includes(searchText.toLowerCase()))
  // }


}
