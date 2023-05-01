import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetSavedComponent } from './get-saved/get-saved.component';
import { AppComponent } from './app.component';
import { ShowSavedComponent } from './show-saved/show-saved.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'saved', component: GetSavedComponent},
  {path: 'test', component: ShowSavedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
