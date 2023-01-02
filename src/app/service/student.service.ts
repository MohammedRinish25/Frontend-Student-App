import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Student } from '../models/student';


type studentListResponse = {
  content: Student[]
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }

  

  private _baseUrl="http://localhost:8081/students-api-get";
  private _postUrl="http://localhost:8082/students-api-post";

  getStudents=():Observable<Student[]>=>{
    return this._http.get<Student[]>(this._baseUrl);
   
  }

  getById=(id:number):Observable<Student>=>{
    let url=this._baseUrl+"/"+id;
    return this._http.get<Student>(url);
  }

  saveStudent=(student:Student):Observable<Student>=>{
    return this._http.post<Student>(this._postUrl,student);
  }

  updateStudent=(student:Student):Observable<Student>=>{
    return this._http.put<Student>(this._postUrl,student);
  }

  deleteStudent=(id:number)=>{
    let url=this._postUrl+"/"+id;
    return this._http.delete(url);
  }

  studentPagination=(records:number,pageIndex:number):Observable<Student[]>=>{
    return this._http.get<studentListResponse>(this._baseUrl+("/")+pageIndex+("/")+records).pipe(map((response)=>{
      return response.content;
    }));
  }

  studentPagingAndSorting(pageIndex:number,records:number, field:string, direction:string){
    return this._http.get<studentListResponse>(this._baseUrl+("/")+pageIndex+("/")+records+"/"+field+"/"+direction).pipe(map((response)=>{
      console.log('RESPONSE-----:'+response);
      let JsonObj = JSON.stringify(response);
      console.log('RESPOSE CONTENT-----:'+JsonObj);
      return response.content;
    }));
  }
  

 
}
