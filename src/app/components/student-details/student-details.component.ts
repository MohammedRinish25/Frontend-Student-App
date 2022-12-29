import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student!:Student;
  id!:number;
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute,private _service:StudentService) { }

  
  
  
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=>{
          this.id=data["id"];
      }
    })
    this._service.getById(this.id).subscribe({
      next:(data)=>{
        this.student=data;
      }
    })
  }

}
