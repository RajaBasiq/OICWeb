import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './component/student/student.component';
import {  StudentListComponent} from './component/student-list/student-list.component';


const routes: Routes = 
[
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'studentlist',
    component: StudentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
