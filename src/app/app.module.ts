import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetSavedComponent } from './get-saved/get-saved.component';
import { HttpClientModule } from '@angular/common/http';
import { GetSavedService } from './service/get-saved.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetSavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [GetSavedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
