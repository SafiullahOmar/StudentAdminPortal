import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from '../infrastructure/gender.interface';
import { student } from '../infrastructure/student.interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  Id: string | null | undefined;
  GenderData:Gender[]=[];
  studentData: student = {
    id: 0,
    name: '',
    birthdate: new Date,
    email: '',
    contact: '',
    profileImage: '',
    genderId: 0,
    address: {
      id: 0,
      physicalAddress: '',
      postalAddress: ''
    },
    gender: {
      id: 0,
      title: '',
      description: ''
    }
  };
  constructor(private studentS: StudentService, private route: ActivatedRoute
    ,private rout:Router ,private snackBar:MatSnackBar) {

  }
  ngOnInit(): void {

    this.studentS.getAllGender().subscribe((data)=>{
      this.GenderData=data;
    });
    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('Id');
    });

    if (this.Id) {
      this.studentS.getStudent(this.Id).subscribe((data) => {
        this.studentData=data;
      });
    }
  }

  UpdateStudent():void{
    this.studentS.updateStudent(this.studentData.id,this.studentData).subscribe((data)=>{
      this.snackBar.open("Student Updated",undefined,{duration:3000});
    },(error)=>{
      console.log("Error");
    });
  }

  DeleteStudent():void{
    this.studentS.deleteStudent(this.studentData.id).subscribe((data)=>{
      this.snackBar.open("Student deleted",undefined,{duration:3000});
      setTimeout(() => {
          this.rout.navigateByUrl('students');
      }, 2000);
    },(error)=>{
      console.log("Error");
    });

  }

}
