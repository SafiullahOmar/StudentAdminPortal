import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from './infrastructure/gender.interface';
import { student } from './infrastructure/student.interface';
import { StudentViewModel } from './infrastructure/studentViewModel';

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
 deleteStudent(Id:number):Observable<student>{
    return this.http.delete<student>(this.baseAPIURL+'/api/students/deleteStudent/'+Id);
  }
  updateStudent(id:number, studentViewModel:student):Observable<student>{
     const VM:StudentViewModel={
        name:studentViewModel.name,
        birthdate:studentViewModel.birthdate,
        email:studentViewModel.email,
        contact:studentViewModel.contact,
        genderId:studentViewModel.genderId,
        physicalAddress:studentViewModel.address.physicalAddress,
        postalAddress:studentViewModel.address.postalAddress
     };

     return this.http.put<student>(this.baseAPIURL+'/api/students/studentUpdate/'+id,VM)
  }
}
