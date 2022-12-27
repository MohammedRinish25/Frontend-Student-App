import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-list',
    pathMatch: 'full'
  },
  {
   path:'student-list',
   component:StudentListComponent,
   canActivate:[AuthGuard],
   data:{roles: ["ADMINISTRATOR","user","employee"]}
  },
  {path:'student-details',
  component:StudentDetailsComponent,
  canActivate:[AuthGuard],
  data:{roles: ["ADMINISTRATOR","user","employee"]}
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
