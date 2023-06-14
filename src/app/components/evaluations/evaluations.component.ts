import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent {
  selectedOption: string = '';
  mydata: any;
  tempdata: any;
  student_no: any;
  
  tempStudentInfo: any;

  /////////////VALIDATION////////////////
  selectedSupervisorAssistance: string = '';
  selectedSupervisorInterest: string = '';
  selectedSupervisorTraining: string = '';
  selectedSupervisorMotivation: string = '';
  selectedSupervisorInstruction: string = '';

  selectedCoworkerAssistance: string = '';
  selectedCoworkerInterest: string = '';
  selectedCoworkerTraining: string = '';
  selectedCoworkerMotivation: string = '';
  selectedCoworkerInstruction: string = '';

  constructor(private studentService: StudentService) {
    this.selectedOption = '';
  }

  ngOnInit(): void {
    this.tempStudentInfo = localStorage.getItem('user');
    const studInfo = JSON.parse(this.tempStudentInfo);
    this.student_no = studInfo.student_no;

    this.studentService.getQuestions(this.tempdata).subscribe((data) => {
      this.tempdata = data;
      this.mydata = this.tempdata.data;
    });
  }

  ChangeEvaluation(evaluation: Event) {
    const selectedValue = (evaluation.target as HTMLSelectElement).value;
    console.log(selectedValue); // or do something else with the selected value
  }

  submitSelectedOption(): void {

    if (this.selectedSupervisorAssistance === '' || this.selectedCoworkerAssistance === '') {
      alert('You cannot send an empty evaluation.');
    }
    else if(this.selectedSupervisorInterest === '' || this.selectedCoworkerInterest === ''){
      alert('You cannot send an empty evaluation.');
    } 
    else if(this.selectedSupervisorTraining === '' || this.selectedCoworkerTraining === ''){
      alert('You cannot send an empty evaluation.');
    } 
    else if(this.selectedSupervisorMotivation === '' || this.selectedCoworkerMotivation === ''){
      alert('You cannot send an empty evaluation.');
    } 
    else if(this.selectedSupervisorInstruction === '' || this.selectedCoworkerInstruction === ''){
      alert('You cannot send an empty evaluation.');
    } 
    else {
      // Process the evaluation or navigate to the Submit Evaluation page
      // Get the selected values from the dropdowns
    const supervisorAssistance = (document.getElementById('supervisorAssistance') as HTMLSelectElement).value;
    const supervisorInterest = (document.getElementById('supervisorInterest') as HTMLSelectElement).value;
    const supervisorTraining = (document.getElementById('supervisorTraining') as HTMLSelectElement).value;
    const supervisorMotivation = (document.getElementById('supervisorMotivation') as HTMLSelectElement).value;
    const supervisorInstruction = (document.getElementById('supervisorInstruction') as HTMLSelectElement).value;

    const coworkerAssistance = (document.getElementById('coworkerAssistance') as HTMLSelectElement).value;
    const coworkerInterest = (document.getElementById('coworkerInterest') as HTMLSelectElement).value;
    const coworkerTraining = (document.getElementById('coworkerTraining') as HTMLSelectElement).value;
    const coworkerMotivation = (document.getElementById('coworkerMotivation') as HTMLSelectElement).value;
    const coworkerInstruction = (document.getElementById('coworkerInstruction') as HTMLSelectElement).value;

    // Create the data object to be sent in the POST request
    const data = {
      student_no: this.student_no,
      supervisorAssistance,
      supervisorInterest,
      supervisorTraining,
      supervisorMotivation,
      supervisorInstruction,
      coworkerAssistance,
      coworkerInterest,
      coworkerTraining,
      coworkerMotivation,
      coworkerInstruction
    };

    // Make a POST request to the API endpoint with the evaluation data
    fetch('http://192.168.27.46:8080/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response from the server
        console.log(result);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }
  }    
}
        




//refer below
// import { Component } from '@angular/core';
// import { StudentService } from 'src/app/services/student.service';


// @Component({
//   selector: 'app-evaluations',
//   templateUrl: './evaluations.component.html',
//   styleUrls: ['./evaluations.component.css']
// })
// export class EvaluationsComponent {
//   selectedOption: string = '';
//   mydata: any;
//   tempdata: any;
//   studentNo : any;
//   tempStudentInfo: any;

//   constructor(private studentService: StudentService) {
//     this.selectedOption = '';
//   }

//   ngOnInit(): void {
//     this.studentService.getQuestions(this.tempdata).subscribe((data) => {
//       this.tempdata = data;
//       this.mydata = this.tempdata.data;
      

//       this.tempStudentInfo = localStorage.getItem('user')

//       var studInfo = JSON.parse((this.tempStudentInfo))
//       this.studentNo = studInfo.student_no
//       // console.log(this.studentNo);
//       // this.studentNo = this.tempdata.student_no;
//       // console.log(this.studentNo);
//     });
//   }
  
//   ChangeEvaluation(evaluation: Event) {
//     const selectedValue = (evaluation.target as HTMLSelectElement).value;
//     console.log(selectedValue); // or do something else with the selected value
//   }
  
  
//   // ChangeEvaluation(evaluation: any) {
//   //   const selectedOption = evaluation.target.value;
//   //   console.log(selectedOption);
//   // }

//   // myFunction(): void {
//   //   const dropdown = document.getElementById("myDropdown");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionB(): void {
//   //   const dropdown = document.getElementById("myDropdown2");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionC(): void {
//   //   const dropdown = document.getElementById("myDropdown3");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionD(): void {
//   //   const dropdown = document.getElementById("myDropdown4");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionE(): void {
//   //   const dropdown = document.getElementById("myDropdown5");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionF(): void {
//   //   const dropdown = document.getElementById("myDropdown6");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionG(): void {
//   //   const dropdown = document.getElementById("myDropdown7");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionH(): void {
//   //   const dropdown = document.getElementById("myDropdown8");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionI(): void {
//   //   const dropdown = document.getElementById("myDropdown9");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // myFunctionJ(): void {
//   //   const dropdown = document.getElementById("myDropdown10");
//   //   if (dropdown) {
//   //     dropdown.classList.toggle("show");
//   //   }
//   // }

//   // click = function (event: MouseEvent): void {
//   //   if (!(event.target instanceof HTMLElement) || !event.target.matches('.dropbtn')) {
//   //     const dropdowns = document.getElementsByClassName("dropdown-content");
//   //     for (let i = 0; i < dropdowns.length; i++) {
//   //       const openDropdown = dropdowns[i];
//   //       if (openDropdown instanceof HTMLElement && openDropdown.classList.contains('show')) {
//   //         openDropdown.classList.remove('show');
//   //       }
//   //     }
//   //   }
//   // };


//   submitSelectedOption(): void {
//   // Get the selected values from the dropdowns
//   const supervisorAssistance = (document.getElementById('supervisorAssistance') as HTMLSelectElement).value;
//   const supervisorInterest = (document.getElementById('supervisorInterest') as HTMLSelectElement).value;
//   const supervisorTraining = (document.getElementById('supervisorTraining') as HTMLSelectElement).value;
//   const supervisorMotivation = (document.getElementById('supervisorMotivation') as HTMLSelectElement).value;
//   const supervisorInstruction = (document.getElementById('supervisorInstruction') as HTMLSelectElement).value;

//   const coworkerAssistance = (document.getElementById('coworkerAssistance') as HTMLSelectElement).value;
//   const coworkerInterest = (document.getElementById('coworkerInterest') as HTMLSelectElement).value;
//   const coworkerTraining = (document.getElementById('coworkerTraining') as HTMLSelectElement).value;
//   const coworkerMotivation = (document.getElementById('coworkerMotivation') as HTMLSelectElement).value;
//   const coworkerInstruction = (document.getElementById('coworkerInstruction') as HTMLSelectElement).value;

//   // Create the data object to be sent in the POST request
//   const data = {
//     supervisorAssistance,
//     supervisorInterest,
//     supervisorTraining,
//     supervisorMotivation,
//     supervisorInstruction,
//     coworkerAssistance,
//     coworkerInterest,
//     coworkerTraining,
//     coworkerMotivation,
//     coworkerInstruction
//   };

//   // Make a POST request to the API endpoint with the evaluation data
//   fetch('http://192.168.27.52:8080/api/answer', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(result => {
//       // Handle the response from the server
//       console.log(result);
//     })
//     .catch(error => {
//       // Handle any errors that occurred during the request
//       console.error('Error:', error);
//     });
// }


// }
// // Close the dropdown if the user clicks outside of it
