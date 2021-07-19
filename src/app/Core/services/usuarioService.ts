import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient){}

    getLogue(x:Login) {
        return this.http.post<User>("http://localhost:8080/api/usuario/login", x, {headers: this.httpHeaders});
    }
  
}