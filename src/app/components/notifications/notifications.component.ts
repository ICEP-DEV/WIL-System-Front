import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationMessages: string = ''
  notificationDate: Date = new Date();

  constructor(private notificationService: NotificationService, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.notificationService.submissionComplete$.subscribe(() => {
      console.log('Submission complete notification received', this.notificationService.submissionComplete$);
      
      
      this.notificationMessages = this.notificationService.getNotificationMessage('system documentation');
      console.log("NOTHING", this.notificationMessages);
      this.notificationDate = new Date();
    });
  }
  
}
