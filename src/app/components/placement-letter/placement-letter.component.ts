import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-placement-letter',
  templateUrl: './placement-letter.component.html',
  styleUrls: ['./placement-letter.component.css']
})
export class PlacementLetterComponent {

  selectedFile: File | null = null;
  message: string | undefined;

constructor(private studentService: StudentService, private router: Router) {}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  
}
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('avatar', this.selectedFile, this.selectedFile.name);
      this.studentService.uploadPlacementLetter(formData).subscribe(
        (response) => {
        this.message = response.message;
        console.log(this.message);
        
        this.selectedFile = null
        this.router.navigate(['/re-admission']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


}
