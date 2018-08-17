import { Injectable } from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'
import { tokenNotExpired } from 'angular2-jwt'
@Injectable()

export class AuthService {

  user: any
  authToken: any
  userInfo: any

  constructor(
    private http: Http
  ) { }

  registerUser(user) {
    const headers = new Headers()
    headers.append('x-access-token', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/user/register', user, {headers : headers} )
    .map(res => res.json())
  }

  authenticateUser(user) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/auth/login', user , {headers: headers})
    .map(res => res.json())
  }

  activateUser(data) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/user/activate' , data , {headers: headers})
    .map(res => res.json())
  }

  getProfile() {
    const headers = new Headers()
    this.loadToken()
    const userId = this.loadUserInfo()._id
    headers.append('x-access-token', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/user/profile/' + userId, {headers: headers})
    .map(res => res.json())
  }

  changeSetting(user) {
    const headers = new Headers()
    this.loadToken()
    const userId = this.loadUserInfo()._id
    headers.append('x-access-token', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/user/setting/'+ userId, user, {headers: headers})
    .map(res => res.json())
  }

  storeUserData(token , user) {
    localStorage.setItem('token-id', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  loadToken () {
    const token =  localStorage.getItem('token-id')
    this.authToken =  token
  }

  loadUserInfo () {
    const user =  localStorage.getItem('user')
    return JSON.parse(user)
  }

  loggedIn() {
    return tokenNotExpired('token-id')
  }

  loggedOut() {
    this.authToken = null
    this.user = null
    localStorage.clear()
    return false
  }
}
