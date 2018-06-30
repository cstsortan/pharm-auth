import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Content } from '../models/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentCol: AngularFirestoreCollection<Content>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.contentCol = this.db.collection('content');
  }

  getContent(): Observable<Content[]> {
    return this.db.collection('content', ref => ref.orderBy('timestamp', 'desc'))
    .snapshotChanges()
    .pipe(map(snapshots => {
      return snapshots.map(snap => {
        const data = snap.payload.doc.data() as Content;
        const id = snap.payload.doc.id;
        return {...data, id: id};
      });
    }));
  }

  getCourseContent(courseId: string, type: string): Observable<Content[]> {
    return this.db.collection('content', ref => ref
      .orderBy('name')
      .where('courseId', '==', courseId)
      .where('type', '==', type))
    .snapshotChanges()
    .pipe(map(snapshots => {
      return snapshots.map(snap => {
        const data = snap.payload.doc.data() as Content;
        const id = snap.payload.doc.id;
        return {...data, id: id};
      });
    }));
  }

  addContent(content: Content) {
    return this.contentCol.add({
      ...content,
      timestamp: Date.now(),
    });
  }

  deleteContent(contentId: string) {
    return this.contentCol.doc(contentId).delete();
  }


}
