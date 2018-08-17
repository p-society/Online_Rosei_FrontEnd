import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import {Http , HttpModule} from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   collegeId: String
   password: String

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      if (this.router.url === '/register') {
        this.router.navigate(['/'])
      }
    }
  }

onRegisterSubmit() {
  this.spinnerService.show()
  const user = {
    collegeId : this.collegeId,
    password : this.password
  }
  this.authService.registerUser(user).subscribe(data => {
    if (data.data.success === false ) {
      this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
      this.spinnerService.hide()
      this.router.navigate(['/register'])
    } else if (data.data.success === true) {
      this.spinnerService.hide()
      this.flashMessage.show('Please verify your collegeId with link sent to your college Email ID', {cssClass: 'alert-success', timeout: 5000})
      this.router.navigate(['/login'])
    }
  })
}
}
