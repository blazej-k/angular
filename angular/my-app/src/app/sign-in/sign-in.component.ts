import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountModel } from '../models/model-account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [AccountService]
})
export class SignInComponent{

  constructor(private service: AccountService, private router: Router){}

  login = '';
  password = '';

  signIn(): any{
    const model: AccountModel = ({
      login: this.login,
      password: this.password
    });
    this.service.signIn(model).subscribe(response => {
      if (response === 'empty') {
        alert(`There is no such an user: ${this.login}`);
        this.login = '';
        this.password = '';
      }
      else{
        this.router.navigate(['/todo']);
      }
    });
  }
  register(): any{
    this.login = '';
    this.password = '';
    this.service.register().subscribe(response => {
      if (response){
        this.router.navigate(['/register']);
      }
    });
  }

}
