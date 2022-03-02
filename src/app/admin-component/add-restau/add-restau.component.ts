
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/pages/models/restaurant';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-add-restau',
  templateUrl: './add-restau.component.html',
  styleUrls: ['./add-restau.component.scss']
})
export class AddRestauComponent implements OnInit {


  public signupForm: FormGroup;
  public errorMessage ?: string;
  public listCategories : any[];
  public expanded = false;

  constructor( private router: Router, private apiBackService : ApiBackService) {
    this.signupForm = new FormGroup({});
    this.listCategories = [];
  }

  ngOnInit(): void {
    
    this.getCategories();

    this.signupForm = new FormGroup({
      nomFc : new FormControl('', [Validators.required]),
      prixFc : new FormControl(''),
      longitudeFc : new FormControl('', [Validators.required,]), // chercher une meilleure regex
      latitudeFc : new FormControl('', [Validators.required]),
      adresseFc : new FormControl('', [Validators.required]),
      telephoneFc : new FormControl(''),
      websiteFc : new FormControl('',[Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]),
      surPlaceFc : new FormControl(''),
      aEmporterFc : new FormControl(''),
      accesPMRFc : new FormControl(''),
      // typerestausFc : new FormControl('')
    })
  }

  public getCategories() : void{
    this.apiBackService.getCategories().subscribe((listCategories: any[]) => {
      // console.log(listCategories);

      this.listCategories = listCategories;

    }); 

  }

  public onSubmit(): void {
    console.log("value : ", this.signupForm.value);
    console.log("form : ", this.signupForm);
    const nomFc = this.signupForm.value['nomFc'];
    const prixFc = this.signupForm.value['prixFc'];
    const longitudeFc = this.signupForm.value['longitudeFc'];
    const latitudeFc = this.signupForm.value['latitudeFc'];
    const adresseFc = this.signupForm.value['adresseFc'];
    const telephoneFc = this.signupForm.value['telephoneFc'];
    const websiteFc = this.signupForm.value['websiteFc'];
    const surPlaceFc = this.signupForm.value['surPlaceFc'];
    const aEmporterFc = this.signupForm.value['aEmporterFc'];
    const accesPMRFc = this.signupForm.value['accesPMRFc'];
    // const typerestausFc = this.signupForm.value['typerestausFc'];
    
    const restaurant: Restaurant = {
      latitude: latitudeFc,
      longitude: longitudeFc,
      nom : nomFc,
      prix: prixFc,
      adresse : adresseFc,    
      telephone : telephoneFc,
      website : websiteFc,
      surPlace : surPlaceFc,
      aEmporter : aEmporterFc,
      accesPMR : accesPMRFc,
      // typerestaus : typerestausFc
    }

    if( restaurant.latitude   !== '' && 
        restaurant.longitude  !== '' &&
        restaurant.nom        !== '' &&
        restaurant.adresse    !== ''  ) {
        this.apiBackService.addRestaurant(restaurant).subscribe(
          resp=>
          
          this.router.navigate(['restaurants'])
        );
    }else{
      
      this.errorMessage = "Renseigner les champs obligatoires **";
    }
  
  }

}

