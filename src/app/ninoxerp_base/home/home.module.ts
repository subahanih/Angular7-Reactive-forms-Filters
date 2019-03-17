import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TopbarComponent } from '../topbar/topbar.component';
import { FooterbarComponent } from '../footerbar/footerbar.component';
import { HomeComponent } from './home.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { MainbarComponent } from '../mainbar/mainbar.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatIconModule, MatTreeModule, MatSortModule } from '@angular/material';
import { MatPaginatorModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseTemplateComponent } from '../../ninoxerp_base/basetemplate/basetemplate.component';
import { SampleComponent } from '../../ninoxerp_base/sample/sample.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatSelectModule
  ],
  declarations: [
    HomeComponent,
    TopbarComponent,
    MenubarComponent,
    MainbarComponent,
    FooterbarComponent,
    BaseTemplateComponent,
    SampleComponent
  ],
  // schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }
