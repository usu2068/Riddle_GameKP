import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loadLogins, loadLoginsSuccess, loadLoginFailure, clearLogin } from '../store/actions/login/login.actions';
import { LoginService } from '../service/login/login.service';
import { UserService } from '../service/users/user.service';
import { UtilitiesService } from '../service/utilities/utilities.service';
import { User } from '../resources/interfaces/users.interface';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  //VARIABLES PUBLICAS
  public submitted = false;
  public loading: boolean = false;

  //VARIABLES PRIVADAS
  private login$: any;

  public formLogin = new FormGroup({
    user: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    // private login: LoginService,
    private login: UserService,
    private Utilities: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.validateFormLogin();
    this.login.getUser().subscribe((users: any) => {
      this.users = users;
      sessionStorage.setItem('login', JSON.stringify(users));
    });
  }

  ngOnDestroy(): void {
    // if (this.login$) this.login$.unsubscribe();
  }

  openRegister(): void {
    this.router.navigate(['/Register']);
  }
  
  onSubmit(): void {
    if (this.formLogin.invalid) {
      return;
    }

    const storedData = sessionStorage.getItem('login');
    // Verificar si hay datos almacenados
    if (storedData) {
      // Si hay datos, convertirlos de nuevo a un array de usuarios
      const users = JSON.parse(storedData);
      console.log(storedData);
      
      // Asignar los usuarios a la propiedad de la clase
      this.users = users;

      // Verificar si el usuario existe en la lista de usuarios
      const username = this.formLogin.value.user;
      const userExists = users.some((user: any) => user.user === username);

      // Si el usuario existe, iniciar sesión
      if (userExists) {
        // Despachar la acción de éxito para iniciar sesión
        this.store.dispatch(loadLoginsSuccess({ usuario: this.formLogin.value }));
        this.Utilities.goToastS('Bienvenido', true);
        this.router.navigate(['/riddle-game']);
      } else {
        this.store.dispatch(loadLoginFailure({ error: 'Usuario no registrado' }));
        this.Utilities.goToast('El usuario no esta registrado', true);
      }
    } else {
      // No hay datos almacenados en sessionStorage
      console.log('No hay usuarios almacenados en sessionStorage');
    }
  }

  private validateFormLogin(): boolean {
    if (
      this.formLogin.controls.user.errors &&
      this.formLogin.controls.user.errors.required
    ) {
      this.Utilities.goToast('El usuario es requerido', true);
      return false;
    }
  }


  //VALIDACION DEL CAMPO USUARIO, NO DEBE ADMITIR PUNTOS
  //NI NUMEROS
  //NO DEBE ADMITIR CARACTERES ESPECIALES
  //VALIDAR EL TIPO DE ACCESO AL JUEGO
  //QUITAR EL CORREO - DA A ENTENDER QUE SE ESTA GUARDANDO ALGUN DATO IMPORTANTE
  //QUE NO HAYAN 2 NOMBRE DE USUARIO IGUALES
}
