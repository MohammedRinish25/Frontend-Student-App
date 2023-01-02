import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentGridComponent } from './components/student-grid/student-grid.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'student-list',
    pathMatch: 'full'
  },
  {
    path:'add-student',
    component: AddUpdateComponent,
    canActivate:[AuthGuard],
    data:{roles: ["MANAGER"]}
  },
  {
    path:'edit-student/:id',
    component: AddUpdateComponent,
    canActivate:[AuthGuard],
    data:{roles: ["MANAGER","EDITOR"]}
  },
  {
   path:'student-list',
   component:StudentListComponent,
   canActivate:[AuthGuard],
   data:{roles: ["MANAGER","EDITOR","MEMBER"]}
  },
  {
    path:'student-grid',
    component:StudentGridComponent,
    canActivate:[AuthGuard],
    data:{roles: ["MANAGER","EDITOR","MEMBER"]}
   },
  {path:'student-details/:id',
  component:StudentDetailsComponent,
  canActivate:[AuthGuard],
  data:{roles: ["MANAGER","EDITOR","MEMBER"]}
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
