import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/service/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  formGroup: FormGroup;
  submitted = false;
  isValid = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  login() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.authService.login(this.formGroup.value).subscribe(response => {
      (response ? this.authService.authUser = response : this.isValid = false);

    });
  }

  private initFormGroup() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.formGroup.controls;
  }
}
