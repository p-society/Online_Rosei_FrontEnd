import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  collegeId: string;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.spinnerService.show()
    const body = {
      collegeId: this.collegeId
    }

    if (this.collegeId === undefined) {
      this.flashMessage.show("Please fill college Id", {cssClass: 'alert-danger', timeout: 5000})
    }

    this.authService.resetPassword(body).subscribe(data=>{
      console.log(data)
      if (data.data.success === false) {
        this.spinnerService.hide()
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
      } else if (data.data.success === true) {
        this.spinnerService.hide()
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000})
        this.router.navigate(['/login'])
      }
    })
  }

}
