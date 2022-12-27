import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule}from '@angular/material/icon';
import{ MatButtonModule}from '@angular/material/button'
import{ MatToolbarModule}from '@angular/material/toolbar';
import{ MatTableModule}from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
  
    
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
   
  ]
})
export class MaterialsModule { }
