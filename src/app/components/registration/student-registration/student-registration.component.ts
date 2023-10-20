import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { StudentsRegistrationServiceService } from 'src/app/services/students-registration-service.service'
import { Students } from 'src/app/models/students';
import * as api from 'src/app/apiUrls'


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit{



  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, 
    private studentsRegistrationServiceService: StudentsRegistrationServiceService,
    ) { }

  ngOnInit() {
    
  }

studentForm = this.builder.group({
      Fullname:[''],
      Email:[''],
      Age:[''],
      Gender:[''],
      DOB:[''],
      Mobile:[''],
      Address:[''],
      Percentage:[''],
      GPA:[''],
      Branch:[''],
      Religion:[''],
      Previous_College:[''],
      Enrollment_date:[''],
      Password:[''],
      Fee:[''],
      Education:[''],
      Student_status:[''],
      Form_status:[''],
    })

   reg: Students= {};

   onSave(){
    console.log(this.studentForm.value.Fullname)

    this.studentsRegistrationServiceService.postRequest(api.postAddAdmissionForms, this.studentForm.value).subscribe(data => {
    
      console.log(data)
      })
   }


   studentRegistration(){

   }
  }
