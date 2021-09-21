import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar,  MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Button } from 'selenium-webdriver';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  isVisible:string="password";
  public loginForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fb: FormBuilder,private router:Router,private _snackBar: MatSnackBar) { 
    this.loginForm =  this.fb.group({
      username :['',[Validators.required]],
      password:['',[Validators.required]]
   })
  }

  ngOnInit(): void {
  }
  getPasswordVisiblity(){
    return this.isVisible =='password' ? 'visibility' : 'visibility_off';
  }
  // For password visiblity toggle 
  togglePasswordVisiblity(){
      if(this.isVisible=='text'){
          this.isVisible='password'
      }else{
        this.isVisible='text';
      }
  }
  onSubmitForm(){
    if(this.loginForm.valid && this.loginForm.controls['username'].value=='test' && this.loginForm.controls['password'].value=='test'){
      localStorage.setItem('user','test');
      localStorage.setItem('password','test')  
      this.router.navigate(['/home']);
    }else{
      this.openSnackBar();
    }
  }
  getUserIdErrorMessage():string{
    return "Error";
  }
  clearForm(){
    this.loginForm.reset();
    this.isVisible='password';
  }
  openSnackBar() {
    this._snackBar.open('Invalid UserID / Password', 'Close', {
      duration: 10000,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar'],
    });
  }
}
