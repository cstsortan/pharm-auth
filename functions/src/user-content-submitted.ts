import { Content } from "./models/content";
import * as nodemailer from 'nodemailer';
import { EventContext, config } from 'firebase-functions';
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import * as admin from 'firebase-admin';
import { Course } from "./models/course";

const gmailEmail = config().gmail.email;
const gmailPassword = config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

export async function userContentSubmittedHandler(snapshot: DocumentSnapshot, context: EventContext) {

    // Get the new content
    const content: Content = {...snapshot.data(), id: snapshot.id} as Content;
    
    const subj = 'Πρόταση για περιεχόμενο!';

    const courseDoc = await admin.firestore().collection('courses')
        .doc(content.courseId)
        .get();
    let course: Course = {} as Course;
    if (courseDoc.exists) {
        course = {...courseDoc.data(), id: courseDoc.id} as Course;
    }

    const text = `
        Έχετε νέο περιεχόμενο που προτάθηκε για το μάθημα ${course.name || '<απροσδιόριστο>'}!!
        Όνομα: ${content.name}
        Περιγραγή: ${content.description}
        Λίνκ: ${content.otherLink}
        Αρχείο: ${content.fileLink}
    `;

    await mailTransport.sendMail({
        from: '~ioanpart <noreply@firebase.com>',
        to: 'ioanpart@pharm.auth.gr',
        subject: subj,
        text: text,
    });

}
