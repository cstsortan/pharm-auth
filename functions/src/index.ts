import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
import { userContentSubmittedHandler } from './user-content-submitted';

export const onUserContentSubmitted = functions.firestore
.document('/user-content/{contentId}')
.onCreate(userContentSubmittedHandler);