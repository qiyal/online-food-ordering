import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(
    private customerService: CustomerService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({

      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      genre: new FormControl(),
      cashback: new FormControl(0),
      urlAvatar: new FormControl('')
    });
  }

  createCustomer() {
    if (this.form.invalid) {
      this.errorMessage = 'Invalid, check form!';
    } else if (this.form.get('password').value !== this.form.get('confirmPassword').value) {
      this.errorMessage = 'Invalid, confirm password!';
    } else {
      this.form.removeControl('confirmPassword');

      this.customerService.createNewCustomer(this.form.getRawValue()).subscribe(res => {
        const status = res;

        console.log(res);

        if (status === 'Created') {
          this.errorMessage = '';
          this.auth.setUserLogin(this.form.get('email').value);
          this.router.navigate(['me/personal-info']);
          console.log("Navigate");
        } else {
          this.errorMessage = res;
        }
      });
    }
  }

}
