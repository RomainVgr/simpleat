import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoleList } from '../models/roleList';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public roleList: typeof RoleList;
  public alertMessage?: string;
  public successMessage?: string;


  constructor(private authService: AuthService, private router: Router) { 
    this.signupForm = new FormGroup({});
    this.roleList = RoleList;
  }

  ngOnInit(): void {
    // FormGroupe => Group de champs de saisie (notre objet)
    // FormControl => Les champs de saisie (nos propriétés)
    this.signupForm = new FormGroup({
      firstNameFc : new FormControl(''),
      lastNameFc : new FormControl(''),
      emailFc : new FormControl('', [Validators.email, Validators.required, Validators.pattern("^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$")]),
      passwordFc : new FormControl('', [Validators.minLength(8), Validators.required]),
      roleFc : new FormControl('')
    })


    console.log(this.roleList);
  }

  public onSubmit(): void {
  
    if(confirm("Êtes-vous sur d'ajouter ce membre ?")){

    const firstNameValue = this.signupForm.value['firstNameFc'];
    const lastNameValue = this.signupForm.value['lastNameFc'];
    const emailValue = this.signupForm.value['emailFc'];
    const passwordValue = this.signupForm.value['passwordFc'];
    const roleValue = this.signupForm.value['roleFc'];
    
    const user: User = {
      prenom: firstNameValue,
      nom: lastNameValue,
      email: emailValue,
      password: passwordValue,
      roleList : [roleValue]
    }

    if(user.email !== '' && user.password !== '') {
      this.authService.signup(user).subscribe(
        resp => {
          this.successMessage = "Membre ajouté !";
        }
      )
      this.signupForm.reset()
    } else {
      this.alertMessage = "Erreur d'ajout !";
    }
  }
  }
  
}
