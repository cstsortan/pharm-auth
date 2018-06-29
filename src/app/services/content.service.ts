import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Content } from '../models/content';

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

  addContent(content: Content) {
    return this.contentCol.add({
      ...content,
      timestamp: Date.now(),
    });
  }


}
