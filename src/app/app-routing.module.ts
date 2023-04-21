import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetSavedComponent } from './get-saved/get-saved.component';

const routes: Routes = [
  {path: '', component: GetSavedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
