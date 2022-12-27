import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
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
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }
 
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

onAddStudent=(addForm:any)=>{
  console.log(addForm);
// console.log(this.addStudentForm.value);
this.student=addForm.value;
console.log(this.student);
this._studentService.saveStudent(this.student).subscribe({
next:(data)=>console.log(data)
})
}


}
