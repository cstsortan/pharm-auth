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
    UploadPercentPipe
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
  bootstrap: [AppComponent]
})
export class AppModule { }
