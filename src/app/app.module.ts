import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetSavedService } from './service/get-saved.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowSavedComponent } from './show-saved/show-saved.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component'  
import { MyMaterialModule } from './material.module';
import { PostTilesComponent } from './post-tiles/post-tiles.component';
import { RegisterComponent } from './register/register.component';
import { ValidationService } from './validation.service';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowSavedComponent,
    HomePageComponent,
    LoginComponent,
    PostTilesComponent,
    RegisterComponent,
    VoteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetSavedService,ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
