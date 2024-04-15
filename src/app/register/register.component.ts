import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/users/user.service';
import { UtilitiesService } from '../service/utilities/utilities.service';
import { CreateUser } from '../resources/interfaces/users.interface';
import { createUserFailure, createUserSuccess } from '../store/actions/user/createUser.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //VARIABLES PUBLICAS
  public submitted = false;

  public formRegister = new FormGroup({
    user: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('/^(?!.*@(outlook\.com|hotmail\.com|gmail\.com|yahoo\.com))/')]),
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private Utilities: UtilitiesService,
    private cUser: UserService
  ) { }

  ngOnInit(): void {
    this.validateFormRegister();
  }

  register(): void {
    this.submitted = true;
    // this.cUser.createUser(createUser).subscribe(
    //   (response) => {
    //     this.store.dispatch(createUserSuccess({ usuario: response }));
    //     console.log("Usuario creado:", response);
    //     this.Utilities.goToastS('Usuario creado', true);
    //   },
    //   (error) => {
    //     this.store.dispatch(createUserFailure({ error: error }));
    //     console.error("Error al crear usuario:", error);
    //     this.Utilities.goToast('No se pudo crear el usuario', true);
    //   }
    // );

    if (this.formRegister.valid) {
      const userData = this.formRegister.value;
      this.cUser.createUser(userData).subscribe(
        response => {
          this.store.dispatch(createUserSuccess({ usuario: response }));
          this.Utilities.goToastS('Usuario creado', true);
          console.log('Usuario registrado correctamente:', response);
        },
        error => {
          this.store.dispatch(createUserFailure({ error: error }));
          this.Utilities.goToast('No se pudo crear el usuario', true);
          console.error('Error al registrar usuario:', error);
        }
      );
    }
  }

  private validateFormRegister(): boolean {
    if (
      this.formRegister.controls.user.errors &&
      this.formRegister.controls.user.errors.required
    ) {
      this.Utilities.goToast('El usuario es requerido', true);
      return false;
    }
    if (
      this.formRegister.controls.email.errors &&
      this.formRegister.controls.email.errors.required
    ) {
      this.Utilities.goToast('El email es requerido', true);
      return false;
    }
  }

}
