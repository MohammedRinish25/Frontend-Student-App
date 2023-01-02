import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {

  students:Student[]=[];

  constructor(private _service:StudentService,private _router:Router) { }

  ngOnInit(): void {
    this._service.getStudents().subscribe({
      next:(data)=>{
          
        console.log(data);
        this.students=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed grid")

    })

    

  }

  studentDetails(student:Student){
    this._router.navigate(['/student-details',student.id])
  }
  
  

}
