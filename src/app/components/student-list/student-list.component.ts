import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

 

  constructor(private _studentService:StudentService) { }

  students:Student[]=[];

 displayedColumns: string[] = [ 'id', 'name', 'admissionNumber','section','division','totalMarks','percentage','result','dateOfBirth','gender','nationality','schoolName','mediumOfInstruction','phoneNumber','emergencyContact','email','religion','fathername','occupation','annualIncome','remark'];



  ngOnInit(): void {

    this._studentService.getStudents().subscribe({
      next:(data)=>{
        console.log(data)
        this.students=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })
    

}
}
