import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private studentS: StudentService, private route: ActivatedRoute) {

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

}
