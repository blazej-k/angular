import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from '../models/model-account';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient){}

  signUp(client: AccountModel): any{
    return this.http.post('/api/register', client, {
      responseType: 'text'
    });
  }
  signIn(client: AccountModel): any{
    return this.http.post('/api/signIn', client, {
      responseType: 'text'
    });
  }
  register(): any {
    return this.http.get('/register', {
      responseType: 'text'
    });
  }
}
