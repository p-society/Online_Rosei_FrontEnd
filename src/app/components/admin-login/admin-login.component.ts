import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import {Http , HttpModule} from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string
  password: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      if (this.router.url === '/login') {
        this.router.navigate(['/adminMess1'])
      }
    }
  }

  onLoginSubmit() {
    this.spinnerService.show()
    const admin = {
      email : this.email,
      password : this.password
    }
  this.authService.authenticateAdmin(admin).subscribe(data => {
    if (data.data.success === false) {
      this.spinnerService.hide()
      this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/adminLogin'])
    } else if (data.data.success === true) {
      this.spinnerService.hide()
      this.authService.storeUserData(data.data.token, data.data.user)
      this.flashMessage.show('Successfully logged in ', {cssClass: 'alert-success', timeout: 5000})
      this.router.navigate(['/'])
    }
  })
  }

}
