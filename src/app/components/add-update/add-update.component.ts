import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';



@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

 student!:Student;
 address!:Address;
  constructor(private _studentService:StudentService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  id!:number;

  studentObj!:Student;

  
 
  addStudentForm=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    admissionNumber:new FormControl(),
    section:new FormControl(),
    division:new FormControl(),
    totalMarks:new FormControl(),
    percentage:new FormControl(),
    result:new FormControl(),
    dateOfBirth:new FormControl(),
    gender:new FormControl(),
    nationality:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      country:new FormControl(),
      zip:new FormControl()
     }),
    schoolName:new FormControl(),
    mediumOfInstruction:new FormControl(),
    phoneNumber:new FormControl(),
    emergencyContact:new FormControl(),
    email:new FormControl(),
    religion:new FormControl(),
    fathername:new FormControl(),
    occupation:new FormControl(),
    annualIncome:new FormControl(),
    remark:new FormControl()

})

ngOnInit(): void {
  this._activatedRoute.params.subscribe({
    next:(data)=>{
        this.id=data["id"];
    }
  })
  this._studentService.getById(this.id).subscribe({
    next:(data)=>{
      this.studentObj=data;
      this.addStudentForm.setValue(data);
      console.log("Student--------"+this.studentObj.name);
    }
  })
}


onAddStudent=(addForm:any)=>{
  console.log(addForm);

this.student=addForm.value;
this._studentService.saveStudent(this.student).subscribe({
next:(data)=>console.log(data)
})
}
public isVisible: boolean = false;

  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }




}
