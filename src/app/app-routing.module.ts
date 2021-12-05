import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/entry', pathMatch: 'full'},
  { path: '', component: EntryComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
