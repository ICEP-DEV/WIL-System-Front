import { Component } from '@angular/core';


@Component({
  selector: 'app-log-entries',
  templateUrl: './log-entries.component.html',
  styleUrls: ['./log-entries.component.css']
})
export class LogEntriesComponent {

  displayEntry:string ='';

getLogEntryies(){

  console.log( this.displayEntry);

 

  
}

displaySubmmitedEntry:string ='';

submitLogEntry(){

  console.log();

 this.displayEntry;

}

}
