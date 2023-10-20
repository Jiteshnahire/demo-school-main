import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Students } from '../models/students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsRegistrationServiceService {
  studentIdToUpdate: number;

  public user: Observable<Students> | undefined;
  constructor(private http: HttpClient) { }

  public teacherName : string;

  public postRequest(url:string,param: any):Observable<any>{
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
    console.log(url+param,{headers:headers});
    return this.http.post<any>(url,param,{headers:headers});
   }

  addStudent(students: Students): Observable<any> {
    return this.http.post('http://localhost:3000/students', { students });
  }

  getStudent(){
    return this.http.get('http://localhost:3000/students');
  }

  deleteStudent(id: any,){
    if(id !== ''){
     this.http.delete('http://localhost:3000/students' + '/'+ id).subscribe((res:any)=>{
      // window.location.reload();
    })
    }
  }
  getStudentById(id: any){
    return this.http.get('http://localhost:3000/students'+'/'+id);
  }
    updateStudent(id: any, students: Students){
      if(id !== ''){
        this.http.put('http://localhost:3000/students' + '/'+ id, { students }).subscribe((res:any)=>{
         // window.location.reload();
       })
       }
    }

  set setTeacherName(val: string){
    this.teacherName = val;
  }
  get getTeacherName():string{
    return this.teacherName;
  }

  set setStudentIdToUpdate(val: number){
    this.studentIdToUpdate = val;
  }
  get getStudentIdToUpdate():number{
    return this.studentIdToUpdate;
  }
}

