import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'viewStudent/:Id',component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
