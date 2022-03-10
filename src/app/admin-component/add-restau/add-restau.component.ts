
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EMPTY_RESTAU, Restaurant } from 'src/app/pages/models/restaurant';
import { ApiBackService } from 'src/app/services/api-back.service';

@Component({
  selector: 'app-add-restau',
  templateUrl: './add-restau.component.html',
  styleUrls: ['./add-restau.component.scss']
})
export class AddRestauComponent implements OnInit {


  public signupForm: FormGroup;
  public errorMessage?: string;
  public listCategories: any[];
  public idRestau: Subscription | undefined;
  public formArrayCheckbox: FormArray;
  public idRestauAModifier?: number = 0; // On instancie a 0 ou undefined = on est en CREATION de Restau
  public successMessage?:  string;

  constructor(private router: Router, private apiBackService: ApiBackService) {
    this.signupForm = new FormGroup({});
    this.listCategories = [];
    this.formArrayCheckbox = new FormArray([]);
  }

  ngOnInit(): void {

    this.apiBackService.getCategories().subscribe(listCateg => this.listCategories = listCateg);
    this.initForm(EMPTY_RESTAU);
    this.formArrayCheckbox = this.signupForm.get('typerestausFc') as FormArray;

    // lorsqu'on recoit l'evenement click sur le bouton modif dans le composant "update-del-restau"
    // on rentre dans cette souscription
    this.idRestau = this.apiBackService.restauAModif.subscribe(restau => {
      //On enregistre un identifiant de restaurant, preuve qu'on est bien en MODIFICATION
      this.idRestauAModifier = restau.id;

      this.cleanCheckbox();

      if (restau.typerestaus != undefined && restau.typerestaus != null) {
        for (let index = 0; index < restau.typerestaus.length; index++) {
          // juste l'affichage
          const idCheckbox = document.getElementById(`categ${restau.typerestaus[index].id}`) as HTMLInputElement
          idCheckbox.checked = true;

          // pour reformer un formArray avec les données récupérées
          this.formArrayCheckbox.push(new FormControl({ id: `${restau.typerestaus[index].id}` }));
        }
      }
      this.initForm(restau);
    })
  }

  public initForm(restau: Restaurant) {

    this.signupForm = new FormGroup({
      nomFc: new FormControl(restau.nom, [Validators.required]),
      prixFc: new FormControl(restau.prix),
      longitudeFc: new FormControl(restau.longitude, [Validators.required,]), // chercher une meilleure regex
      latitudeFc: new FormControl(restau.latitude, [Validators.required]),
      adresseFc: new FormControl(restau.adresse, [Validators.required]),
      telephoneFc: new FormControl(restau.telephone),
      websiteFc: new FormControl(restau.website, [Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]), // voir une autre regex
      surPlaceFc: new FormControl(restau.surPlace),
      aEmporterFc: new FormControl(restau.aEmporter),
      accesPMRFc: new FormControl(restau.accesPMR),
      typerestausFc: new FormArray([])
    })
  }


  public onSubmit(): void {
    console.log("value : ", this.signupForm.value);
    // console.log("form : ", this.signupForm);
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
    const typerestausFc = this.formArrayCheckbox.value;

    // console.log(this.formArray);

    const restaurant: Restaurant = {
      id: this.idRestauAModifier,
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

      // si l'identifiant du restaurant est rensigné alors on MODIFIE
      if (this.idRestauAModifier != 0 &&
        this.idRestauAModifier != null &&
        this.idRestauAModifier != undefined) {
          this.apiBackService.modifRestaurant(restaurant).subscribe(
            resp => {
              this.idRestauAModifier = 0 
            // Une fois le retour du subscribe qui est la preuve du bon enregistrement alors
            // On reinitialise identifiant restau a 0 pour se remettre en mode CREATION
              this.successMessage = "Restaurant modifié !"
              this.initForm(EMPTY_RESTAU);
              this.cleanCheckbox();
            
            //this.router.navigate(['restaurants'])
            }
          )
      } else { // sinon on crée un restau
        this.apiBackService.addRestaurant(restaurant).subscribe(
          resp => {
          this.initForm(EMPTY_RESTAU)
          this.cleanCheckbox()
          this.successMessage = "Restaurant ajouté !"
          this.router.navigate(['admin'])
          
          }
        );
        this.initForm(EMPTY_RESTAU);
      }
    } else {

      this.errorMessage = "Renseigner les champs obligatoires **";
    }

  }

  onCheckChange(event: any) {
    // this.formArrayCheckbox = this.signupForm.get('typerestausFc') as FormArray;
    // console.log(this.formArrayCheckbox);

    if (event.target.checked) {

      this.formArrayCheckbox.push(new FormControl({ id: event.target.value }));

    } else {
      let i: number = 0;

      this.formArrayCheckbox.controls.forEach((ctrl) => {

        if (ctrl.value['id'] == event.target.value) {
          this.formArrayCheckbox.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  cleanCheckbox(){
    // on vide les checkbox si on en a coché avant de cliquer sur une modif
    this.formArrayCheckbox.controls = [];

    // on vide (pour l'affichage également)
    let inputCategories = document.querySelectorAll('#checkboxes li input');
    for (let i = 0; i < inputCategories.length; i++) {
      let input = inputCategories[i] as HTMLInputElement
      input.checked = false;
    }
  }

  ngOnDestroy() {
    if (this.idRestau) {
      this.idRestau.unsubscribe();
      this.idRestau = undefined;
    }
  }

}

