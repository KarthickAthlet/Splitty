import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  createForm: FormGroup;
  // loginPageDeclaration: LoginPageDeclaration = new LoginPageDeclaration();

  constructor(private formBuilderProperty: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilderProperty.group({
            profileUName: ['', [Validators.required, Validators.minLength(3)]],
            profileFPassword: ['', [Validators.required, Validators.maxLength(50)]],
            profileCPassword: ['', [Validators.required, Validators.minLength(3)]],
            profileAge: ['', [Validators.required, Validators.maxLength(50)]],
            profileOccupation: ['', [Validators.required, Validators.minLength(3)]],
            profileMobile: ['', [Validators.required, Validators.maxLength(50)]],
            profileEmail: ['', [Validators.required, Validators.minLength(3)]]
        });
  }

}
