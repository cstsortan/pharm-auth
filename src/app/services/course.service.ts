import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { map } from 'rxjs/operators';
import { Instructor } from '../models/instructor';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesCol: AngularFirestoreCollection<Course>;

  constructor(
    private db: AngularFirestore
  ) {
    this.coursesCol = db.collection('courses');
   }

   getCourses(semesterId: string = null): Observable<Course[]> {
    return this.db.collection<Course>('courses', ref => !semesterId ? ref : ref.where('semesterId', '==', semesterId))
    .snapshotChanges()
    .pipe(map(snapshots => {
      return snapshots.map(snap => {
        const data = snap.payload.doc.data() as Course;
        const id = snap.payload.doc.id;
        return {...data, id};
      });
    }));
   }

   addCourse(course: Course) {
    return this.coursesCol.add(course);
   }

   deleteCourse(courseId: string) {
    return this.coursesCol.doc(courseId).delete();
   }

   addCourseInstructor(instructor: Instructor, course: Course) {
    const data = course;
    data.instructors = {
      ...(data.instructors),
      [instructor.id]: instructor
    };
    return this.coursesCol.doc(course.id).set(data, {merge: true});
   }

  removeCourseInstructor(instructor: Instructor, course: Course) {
    const data = course;
    data.instructors[instructor.id] = firebase.firestore.FieldValue.delete();
    return this.coursesCol.doc(course.id).set(data, {merge: true});
  }
}
