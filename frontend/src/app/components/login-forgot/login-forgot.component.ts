import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-login-forgot',
  templateUrl: './login-forgot.component.html',
  styleUrls: ['./login-forgot.component.css']
})
export class LoginForgotComponent implements OnInit {
  
  title = 'Log In | Forgot Password';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
