import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataService } from './services/data.service';
import { SemesterComponent } from './semester/semester.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AdminComponent } from './admin/admin.component';
import { InstructorService } from './services/instructor.service';
import { FormsModule } from '@angular/forms';
import { InstructorsEditorComponent } from './admin/instructors-editor/instructors-editor.component';
import { CourseEditorComponent } from './admin/course-editor/course-editor.component';
import { CourseService } from './services/course.service';
import { CourseItemComponent } from './admin/course-editor/course-item/course-item.component';
import { SemesterCoursesComponent } from './admin/course-editor/semester-courses/semester-courses.component';
import { CourseComponent } from './semester/course/course.component';
import { InstructorsPipe } from './pipes/instructors.pipe';
import { ContentEditorComponent } from './admin/content-editor/content-editor.component';
import { ContentFormComponent } from './admin/content-editor/content-form/content-form.component';
import { UploadPercentPipe } from './pipes/upload-percent.pipe';
import { ContentService } from './services/content.service';
import { ContentListComponent } from './admin/content-editor/content-list/content-list.component';
import { ContentListItemComponent } from './admin/content-editor/content-list-item/content-list-item.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { UsefulLinksPageComponent } from './useful-links-page/useful-links-page.component';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { UserFacingContentFormComponent } from './user-facing-content-form/user-facing-content-form.component';
import { UserContentDashboardComponent } from 'src/app/admin/user-content-dashboard/user-content-dashboard.component';
import { UserContentItemComponent } from './admin/user-content-dashboard/user-content-item/user-content-item.component';
import { ContentTypePipe } from './pipes/content-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SemesterComponent,
    AdminComponent,
    InstructorsEditorComponent,
    CourseEditorComponent,
    CourseItemComponent,
    SemesterCoursesComponent,
    CourseComponent,
    InstructorsPipe,
    ContentEditorComponent,
    ContentFormComponent,
    UploadPercentPipe,
    ContentListComponent,
    ContentListItemComponent,
    CoursePageComponent,
    UsefulLinksPageComponent,
    InstructorPageComponent,
    ContentCardComponent,
    UserFacingContentFormComponent,
    UserContentDashboardComponent,
    UserContentItemComponent,
    ContentTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    DataService,
    InstructorService,
    CourseService,
    ContentService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ContentFormComponent,
    UserFacingContentFormComponent,
  ]
})
export class AppModule { }
