import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { PaymentService } from 'src/app/services/payment.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  teacherForm: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.teacherForm = this.builder.group({
      teacherName:[''],
      teacherAge:[''],
      teacherSubject:[''],
      teacherSalary:['']
    })
  }
}
  // teacherRegistration(){
  //   this.teacherRegistrationServiceService.addTeacher(this.teacherForm.value)
  //     .subscribe(res=>{
  //       this.teacherForm.reset;
  //       this.router.navigate(['teacher']);
      





