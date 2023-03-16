import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { student } from '../infrastructure/student.interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
students:student[]=[];
columnsToDisplay = ['Name', 'Email','birthdate','Contact'];
dataSource:MatTableDataSource<student>=new MatTableDataSource<student>;
@ViewChild(MatPaginator) matPaginator!:MatPaginator
@ViewChild(MatSort) matSort!:MatSort;
filterText:string='';
  constructor(private student:StudentService) {

  }
  ngOnInit(): void {
    this.student.getAllStudents().subscribe((result)=>{
      this.students=result;
        this.dataSource=new MatTableDataSource<student>(this.students);
        if(!this.matPaginator){
            this.dataSource.paginator=this.matPaginator;
        }
        if(!this.matSort){
          this.dataSource.sort=this.matSort;
      }

    });
  }

  FilterText(){
    this.dataSource.filter=this.filterText;
  }

}
