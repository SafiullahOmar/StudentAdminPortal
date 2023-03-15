import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseAPIURL="https://localhost:44318";

  constructor(private http:HttpClient) { }
  getAllStudents():Observable<any>{
    return this.http.get<any>(this.baseAPIURL+'/api/students/GetAllStudentAsync');
  }
}
