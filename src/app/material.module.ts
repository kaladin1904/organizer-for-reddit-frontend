import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatCheckboxModule, 
        FormsModule, 
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,],
    exports: [MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatCheckboxModule, 
        FormsModule, 
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatRadioModule,],
})

export  class  MyMaterialModule { }