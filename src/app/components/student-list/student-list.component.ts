import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  

  constructor(private _studentService:StudentService,private _router:Router, private _dialog:MatDialog,) { }
//change
   index!:number;
   records!:number;
   //change
  students:Student[]=[];

 displayedColumns: string[] = [ 'id', 'name', 'admissionNumber','section','division','totalMarks','percentage','result','dateOfBirth','gender','nationality','schoolName','mediumOfInstruction','phoneNumber','emergencyContact','email','religion','fathername','occupation','annualIncome','remark','edit','delete'];
  columns:string[]=[];
flag:boolean=true;
direction:string='DESC';
temp:boolean=true;

onSelect(event:any){
  console.log(event.value);
  this.displayedColumns=event.value;
}

  ngOnInit(): void {

    this._studentService.getStudents().subscribe({
      next:(data)=>{
        this.columns=this.displayedColumns;
        console.log(data);
        this.students=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })
    //change
    this.index=0;
    this.records=5;

   

}

// addStudent(){
//   this._router.navigate(['/add-student'])
// }


studentDetails(student:Student){
      
  this._router.navigate(['/student-details',student.id])
}

editPage(element:Student){
  this._router.navigate(['/edit-student',element.id])
}

deleteStudent(element:Student){
  this._studentService.deleteStudent(element.id).subscribe(()=>{


    this._studentService.getStudents().subscribe({
      next:(data)=>{
        
        console.log(data)
        this.students=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })


  })
}




pagination(PageSizeOptions:PageEvent){
 this. records=PageSizeOptions.pageSize;
 this. index=PageSizeOptions.pageIndex;
  console.log(this.index);
  this._studentService.studentPagination(this.records,this.index).subscribe({
    next:(data)=>{
      this.students=data;
      console.log(this.students);
      console.log("pagination done");
    },
    error:(error)=>console.log(error),
    complete:()=>console.log("completed")
  })
}

sort(field:string){
  if(this.direction==='DESC'){
    this.direction='ASC';
  }
  else{
    this.direction='DESC';
  }
  console.log("INSIDE SORT")
  this._studentService.studentPagingAndSorting(this.index,this.records,field,this.direction).subscribe((obj:any)=>{
    console.log(obj);
    this.students=obj;
  });
  console.log('AFTER SORT');
}

// gridChange(){
//   if(this.flag && this.temp){
//     this.flag=false;
//     this.temp=false
//   }
//   else{
//     this.flag=true;
//     this.temp=true;
//   }
  
// }



}
