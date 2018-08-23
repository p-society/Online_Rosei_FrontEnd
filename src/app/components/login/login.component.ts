import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  constructor(

    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      if (this.router.url === '/login') {
        this.router.navigate(['/'])
      }
    }
  }

  onLoginSubmit() {
    this.spinnerService.show()
    const user = {
      email : this.email,
      password : this.password
    }
  this.authService.authenticateUser(user).subscribe(data => {
    if (data.data.success === false) {
      this.spinnerService.hide()
      this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/login'])
    } else if (data.data.success === true) {
      this.spinnerService.hide()
      this.authService.storeUserData(data.data.token, data.data.user)
      this.flashMessage.show('Successfully logged in ', {cssClass: 'alert-success', timeout: 5000})
      this.router.navigate(['/'])
    }
  })
  }
}
