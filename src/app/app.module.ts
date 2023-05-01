import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetSavedComponent } from './get-saved/get-saved.component';
import { HttpClientModule } from '@angular/common/http';
import { GetSavedService } from './service/get-saved.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowSavedComponent } from './show-saved/show-saved.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    GetSavedComponent,
    ShowSavedComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [GetSavedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
