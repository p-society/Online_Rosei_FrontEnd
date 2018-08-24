import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-activate-email',
  templateUrl: './activate-email.component.html',
  styleUrls: ['./activate-email.component.css']
})
export class ActivateEmailComponent implements OnInit {

  collegeId: string;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
  }

  sendActivationEmail() {
    this.spinnerService.show()
    const body = {
      collegeId: this.collegeId
    }

    if (this.collegeId === undefined) {
      this.flashMessage.show("Please fill college Id", {cssClass: 'alert-danger', timeout: 5000})
    }

    this.authService.sendActivationEmail(body).subscribe(data=>{
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
