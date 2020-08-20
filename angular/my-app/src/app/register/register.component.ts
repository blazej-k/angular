import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountModel } from '../models/model-account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AccountService]
})
export class RegisterComponent {

  constructor(private service: AccountService, private router: Router){}

  login = '';
  password = '';

  signUp(): any{
    if ((this.login.length !== 0 ) && (this.password.length !== 0)){
      const model: AccountModel = ({
        login: this.login,
        password: this.password
      });
      this.service.signUp(model).subscribe((response) => {
        this.login = '';
        this.password = '';
        if (response === 'occupied') {
          alert('This login is occupied!');
        }
        else{
          this.router.navigate(['/todo']);
        }
      });
    }
    else{
      alert('Provide your details!');
      return;
    }
  }
}
