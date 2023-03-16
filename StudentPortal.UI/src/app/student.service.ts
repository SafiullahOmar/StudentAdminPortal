import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './infrastructure/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseAPIURL="https://localhost:44318";

  constructor(private http:HttpClient) { }
  getAllStudents():Observable<student[]>{
    return this.http.get<student[]>(this.baseAPIURL+'/api/students/GetAllStudent');
  }
  getStudent(Id:string):Observable<student>{
    return this.http.get<student>(this.baseAPIURL+'/api/students/GetStudent/'+Id);
  }
}
