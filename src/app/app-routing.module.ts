import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';

const routes: Routes = [
  {path:'list', component:ListUsersComponent},
  {path:'ajoutUser', component: AjoutUserComponent},
  {path:'', redirectTo:'list', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
