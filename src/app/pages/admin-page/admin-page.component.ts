import { Component, OnInit } from '@angular/core';
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


  public signupForm: FormGroup;
  public errorMessage ?: string;

  constructor( private router: Router, private apiBackService : ApiBackService) {
    this.signupForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      nomFc : new FormControl('', [Validators.required]),
      prixFc : new FormControl(''),
      longitudeFc : new FormControl('', [Validators.required,]), // chercher une meilleure regex
      latitudeFc : new FormControl('', [Validators.required]),
      adresseFc : new FormControl('', [Validators.required]),
      telephoneFc : new FormControl(''),
      websiteFc : new FormControl(''),
      aEmporterFc : new FormControl(''),
    })
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
    const aEmporterFc = this.signupForm.value['aEmporterFc'];
    // const accesPMRFc = this.signupForm.value['accesPMRFc'];
    // const surPlaceFc = this.signupForm.value['surPlaceFc'];
    
    const restaurant: Restaurant = {
      latitude: latitudeFc,
      longitude: longitudeFc,
      nom : nomFc,
      prix: prixFc,
      adresse : adresseFc,    
      telephone : telephoneFc,
      website : websiteFc,
      aEmporter : aEmporterFc,
      // accesPMR : accesPMRFc,
      // surPlace : surPlaceFc
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
