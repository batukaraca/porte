import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  success = false;

  constructor(private fb: FormBuilder, private api: ApiService, private ngxService: NgxUiLoaderService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: ['', Validators.required]
    });
  }

  changeTouch() {
    this.registerForm.markAsUntouched();
  }

  SignIn() {
    if (this.registerForm.valid) {
      this.ngxService.start(); 
      this.api.checkLogin(Math.floor(Math.random() * 100)).then((res: any) => {
        if (res) {
            console.log(res)
            this.success=true;
            this.ngxService.stop();
        }
        else {
          this.ngxService.stop(); 
        }
      });
    }
  }
}
