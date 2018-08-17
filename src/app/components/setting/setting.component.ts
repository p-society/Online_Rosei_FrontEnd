import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import {Http , HttpModule} from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  user: Object
  password: String
  confirmPassword: String

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.show()
    this.authService.getProfile().subscribe(data => {
      this.spinnerService.hide()
      this.user = data.data.user
    })
  }

  changeSetting() {
    this.spinnerService.show()
    const user = {
      password : this.password,
      confirmPassword : this.confirmPassword
    }
    this.authService.changeSetting(user).subscribe(data => {
      if (data.data.success === false) {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
        this.spinnerService.hide()
      } else if (data.data.success === true) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000})
        this.spinnerService.hide()
        this.router.navigate(['/profile'])
      }
    })
  }
}
