import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../../models/customer";
import {AuthService} from "../../../../services/auth.service";
import {CustomerService} from "../../../../services/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {ProfileInfoEditComponent} from "../../../dialogs/profile-info-edit/profile-info-edit.component";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  customer: Customer;

  constructor(
    private auth: AuthService,
    private customerService: CustomerService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomerByLogin(this.auth.authUserLogin).subscribe(res => {
      this.customer = res;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileInfoEditComponent, {
      data: { customer: this.customer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updateCustomerInfoFull(result.customer.email, result.customer).subscribe(res => {
          this.customer = res;
          console.log("Update date");
        });
      } else {
        this.getCustomer();
      }
    });
  }

}
