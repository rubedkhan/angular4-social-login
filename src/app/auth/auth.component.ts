import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form;
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username : new FormControl("", Validators.required),
      password : new FormControl("", Validators.required)
    });
    /*
    * Get social login user data
    */
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log(user);
    });
  }

  onSubmit = function(data){
     console.log(data);
     this.router.navigate(['/user']);
  }

 /*
  * Facebook login
  */
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  /*
   * Google login
  */
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }



}

