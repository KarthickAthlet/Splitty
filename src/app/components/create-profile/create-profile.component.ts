import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
    let passwordControl = c.get('profileFPassword');
    let confirmControl = c.get('profileCPassword');

    if (passwordControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
 }

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  createForm: FormGroup;
  // loginPageDeclaration: LoginPageDeclaration = new LoginPageDeclaration();

  passwordMessage: string;

  private validationMessages = {
    required: " password required",
    pattern: "password pattern wrong"
  }

  constructor(private formBuilderProperty: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilderProperty.group({
      profileUName: ['', [Validators.required, Validators.minLength(3)]],
      passwordGroup: this.formBuilderProperty.group({
        profileFPassword: ['', [Validators.required, Validators.minLength(8)]],
        profileCPassword: ['', [Validators.required, Validators.minLength(8)]],
      },{validator:passwordMatcher}),
      profileAge: ['', [Validators.required]],
      profileSex: ['', [Validators.required]],
      profileOccupation: ['', [Validators.required, Validators.minLength(3)]],
      profileMobile: ['', [Validators.required, Validators.pattern('')]],
      profileEmail: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]]
    });

    // console.log(this.createForm.get('profileUName').touched );
    // console.log(this.createForm.get('profileUName').dirty);
    // console.log(this.createForm.get('profileUName').valid);
    const passwordCheck = this.createForm.get('passwordGroup.profileFPassword');
    passwordCheck.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(passwordCheck));

  }
  save(): any {
    alert('saved');
  }

  setMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }


}
