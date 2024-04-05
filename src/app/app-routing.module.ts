import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'riddle-game', component: PrincipalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
