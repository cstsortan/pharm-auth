import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private db: AngularFirestore) { }

  getInstructors(): Observable<Instructor[]> {
    return this.db.collection('instructors', ref => ref.orderBy('name'))
      .snapshotChanges()
      .pipe(map(snapshots => {
        return snapshots.map(snap => {
          const data = snap.payload.doc.data() as Instructor;
          const id = snap.payload.doc.id;
          return {...data, id};
        });
      }));
  }

  deleteInstructor(instructorId: string) {
    return this.db.collection('instructors').doc(instructorId).delete();
  }

  submitInstructor(instructor: Instructor) {
    return this.db.collection('instructors').add(instructor);
  }
}
