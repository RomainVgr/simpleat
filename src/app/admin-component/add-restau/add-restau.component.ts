
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Restaurant } from 'src/app/pages/models/restaurant';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-add-restau',
  templateUrl: './add-restau.component.html',
  styleUrls: ['./add-restau.component.scss']
})
export class AddRestauComponent implements OnInit {


  public signupForm: FormGroup;
  public errorMessage?: string;
  public listCategories$: Observable<any[]>;
  public expanded = false;
  public idRestau : Subscription | undefined;

  constructor(private router: Router, private apiBackService: ApiBackService) {
    this.signupForm = new FormGroup({});
    this.listCategories$ = this.getCategories();
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      nomFc: new FormControl('', [Validators.required]),
      prixFc: new FormControl(''),
      longitudeFc: new FormControl('', [Validators.required,]), // chercher une meilleure regex
      latitudeFc: new FormControl('', [Validators.required]),
      adresseFc: new FormControl('', [Validators.required]),
      telephoneFc: new FormControl(''),
      websiteFc: new FormControl('', [Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]),
      surPlaceFc: new FormControl(''),
      aEmporterFc: new FormControl(''),
      accesPMRFc: new FormControl(''),
      typerestausFc: new FormArray([])
    })

    this.idRestau = this.apiBackService.restauAModif.subscribe(restau => {


    //   const formArray: FormArray = this.signupForm.get('typerestausFc') as FormArray;
    //   if(restau.typerestaus != undefined){
    //   for (let index = 0; index < restau.typerestaus.length; index++) {
    //     //listCategories.filter(categorie => categorie.id == restau.typerestaus[index]['id'])
    //     this.signupForm.patchValue({typerestausFc : {restau.typerestaus[index]['id'] : true}});
    //     formArray.push(new FormControl(restau.typerestaus[index]['id'] : true));
        
    //   }
    // }
    //   console.log(formArray);
      
      this.signupForm = new FormGroup({
        nomFc: new FormControl(restau.nom, [Validators.required]),
        prixFc: new FormControl(restau.prix),
        longitudeFc: new FormControl(restau.longitude, [Validators.required,]), // chercher une meilleure regex
        latitudeFc: new FormControl(restau.latitude, [Validators.required]),
        adresseFc: new FormControl(restau.adresse, [Validators.required]),
        telephoneFc: new FormControl(restau.telephone),
        websiteFc: new FormControl(restau.website, [Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]),
        surPlaceFc: new FormControl(restau.surPlace),
        aEmporterFc: new FormControl(restau.aEmporter),
        accesPMRFc: new FormControl(restau.accesPMR),
        typerestausFc: new FormArray([])
      })
    }
    )
  }

  public getCategories(): Observable<any[]> {
    return this.apiBackService.getCategories();

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
    const typerestausFc = this.signupForm.value['typerestausFc'];

    console.log(typerestausFc);
    

    const restaurant: Restaurant = {
      latitude: latitudeFc,
      longitude: longitudeFc,
      nom: nomFc,
      prix: prixFc,
      adresse: adresseFc,
      telephone: telephoneFc,
      website: websiteFc,
      surPlace: surPlaceFc,
      aEmporter: aEmporterFc,
      accesPMR: accesPMRFc,
      typerestaus: typerestausFc
    }

    if (restaurant.latitude !== '' &&
      restaurant.longitude !== '' &&
      restaurant.nom !== '' &&
      restaurant.adresse !== '') {
      this.apiBackService.addRestaurant(restaurant).subscribe(
        resp =>
          this.router.navigate(['restaurants'])
      );
    } else {

      this.errorMessage = "Renseigner les champs obligatoires **";
    }

  }

  onCheckChange(event : any) {
    const formArray: FormArray = this.signupForm.get('typerestausFc') as FormArray;
    console.log(FormArray);
    
    if (event.target.checked) {
      
      formArray.push(new FormControl({id : event.target.value}));
      
    }else { 
      let i: number = 0;

      formArray.controls.forEach((ctrl) => {
        
        if (ctrl.value['id'] == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        
        i++;
      });
    }
  }


  ngOnDestroy() {
    if (this.idRestau) {
      this.idRestau.unsubscribe();
      this.idRestau = undefined;
    }
  }

}

