import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private submissionSubject = new Subject<void>();
  private notificationMessages: { [key: string]: string } = {};

  submissionComplete$ = this.submissionSubject.asObservable();

  notifySubmissionComplete(page: string) {
    console.log('Submission complete notification');
    this.submissionSubject.next();
    this.setNotificationMessage(page, 'Submission completed');
  }

  getNotificationMessage(page: string): string {
    return this.notificationMessages[page] || '';
  
  }

  setNotificationMessage(page: string, message: string) {
    this.notificationMessages[page] = message;
    console.log(this.notificationMessages);
    
  }

 
}
