import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../models/students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  studentIdToUpdate: number;

  constructor(private http: HttpClient) { }

  public teacherName : string;
  
}
