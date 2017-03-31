import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginPageDeclaration } from './login-page-declaration';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  // loginPageDeclaration: LoginPageDeclaration = new LoginPageDeclaration();

  constructor(private formBuilderProperty: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilderProperty.group({
      loginUName: ['', [Validators.required, Validators.minLength(3)]],
      loginPassword: ['', [Validators.required, Validators.maxLength(50)]]
    });

    // console.log(this.loginForm.get('loginUName').touched );
    // console.log(this.loginForm.get('loginUName').dirty);
    // console.log(this.loginForm.get('loginUName').valid);
  }

  loginEntry() {
    alert('login success');
  }

}
