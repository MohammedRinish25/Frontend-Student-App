import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }

  

  private _baseUrl="http://localhost:8081/students";

  getStudents=():Observable<Student[]>=>{
    return this._http.get<Student[]>(this._baseUrl);
   
  }

  getById=(id:number):Observable<Student>=>{
    let url=this._baseUrl+id;
    return this._http.get<Student>(url);
  }

  saveStudent=(student:Student):Observable<Student>=>{
    return this._http.post<Student>(this._baseUrl,student);
  }

  updateStudent=(student:Student):Observable<Student>=>{
    return this._http.put<Student>(this._baseUrl,student);
  }

  deleteStudent=(student:Student):Observable<Student>=>{

    return this._http.delete<Student>(this._baseUrl);
  }

 
}
