import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from './infrastructure/gender.interface';
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
  getAllGender():Observable<Gender[]>{
    return this.http.get<Gender[]>(this.baseAPIURL+'/api/gender/GetAllGender');
  }
  getStudent(Id:string):Observable<student>{
    return this.http.get<student>(this.baseAPIURL+'/api/students/GetStudent/'+Id);
  }
}
