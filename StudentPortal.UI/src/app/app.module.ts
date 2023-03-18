import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { StudentComponent } from './student/student.component'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import{FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './view-student/view-student.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    StudentComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
