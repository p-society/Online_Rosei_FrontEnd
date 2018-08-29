import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()

export class AuthService {

  user: any;
  authToken: any;
  userInfo: any;

  constructor(
    private http: Http
  ) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/user/register', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/auth/login', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateAdmin(admin) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/admin/login', admin, { headers: headers })
      .map(res => res.json());
  }

  activateUser(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/user/activate', data, { headers: headers })
      .map(res => res.json());
  }

  // get profile
  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://topaz-ceiling.glitch.me/user/profile', { headers: headers })
      .map(res => res.json());
  }

  // get ground floor users for admin
  getUsersMessDown() {
    const headers = new Headers();
    this.loadToken();
    const adminId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://topaz-ceiling.glitch.me/admin/mess1/all/' + adminId, { headers: headers })
      .map(res => res.json());
  }

  // get 1st floor users for admin
  getUsersmessUp() {
    const headers = new Headers();
    this.loadToken();
    const adminId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://topaz-ceiling.glitch.me/admin/mess2/all/' + adminId, { headers: headers })
      .map(res => res.json());
  }

  // God admin route

  god(data) {
    const headers = new Headers();
    this.loadToken();
    const adminId = this.loadUserInfo()._id;
    headers.append('x-access-token', data);
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/admin/god/' + adminId, { headers: headers })
      .map(res => res.json());
  }

  // get coupon
  getCoupon() {
    const headers = new Headers();
    this.loadToken();
    const userId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://topaz-ceiling.glitch.me/book/getCoupon/', { headers: headers })
      .map(res => res.json());
  }

  // changing password
  changeSetting(user) {
    const headers = new Headers();
    this.loadToken();
    const userId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/user/setting/' + userId, user, { headers: headers })
      .map(res => res.json());
  }

  // booking couon
  bookCoupon(data) {
    const headers = new Headers();
    this.loadToken();
    const userId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/book/bookCoupon/' + userId, data, { headers: headers })
      .map(res => res.json());
  }

  // edit coupons
  editCoupon(data) {
    const headers = new Headers();
    this.loadToken();
    const userId = this.loadUserInfo()._id;
    headers.append('x-access-token', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/book/editCoupon/' + userId, data, { headers: headers })
      .map(res => res.json());
  }

  // activation email

  sendActivationEmail(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/user/sendActivation/', data, { headers: headers })
      .map(res => res.json());
  }

  // forgot Password

  resetPassword(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://topaz-ceiling.glitch.me/user/forgotPassword/', data, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('token-id', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('token-id');
    this.authToken = token;
  }

  loadUserInfo() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  loggedIn() {
    return tokenNotExpired('token-id');
  }

  loggedOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return false;
  }
}
