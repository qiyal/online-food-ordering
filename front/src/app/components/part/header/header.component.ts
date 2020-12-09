import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userImageUrl: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

  }

  isShow(): boolean {
    return !this.authService.isAuth();
  }

  navToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  navToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  navToProfile() {
    this.router.navigate(['/me/personal-info']);
  }

  getAvatarUrl() {
    // console.log(this.authService.authUser.firstName);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
