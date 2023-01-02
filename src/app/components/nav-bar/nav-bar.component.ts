import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _service:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  onClick=()=>{
    this._service.logout();

  }

  // addStudent(){
  //   this._router.navigate(['/add-student'])
  // }

  flag:boolean=true;

  gridChange(){
    if(this.flag ){
      this.flag=false;
      this._router.navigate(['/student-grid'])
    
    }
    else{
      this.flag=true;
      this._router.navigate(['/student-list'])
    }
    
  }

  backToHome(){
    this._router.navigate(['/student-list'])
  }

  addStudent(){
    this._router.navigate(['/add-student'])
  }

}
