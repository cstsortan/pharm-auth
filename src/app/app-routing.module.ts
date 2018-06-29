import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import { SemesterComponent } from 'src/app/semester/semester.component';
import { AdminComponent } from './admin/admin.component';
import { CoursePageComponent } from './course-page/course-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'semester/:id',
    component: SemesterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'course/:id',
    component: CoursePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
