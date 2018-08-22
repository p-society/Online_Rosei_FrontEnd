import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import {Http , HttpModule} from '@angular/http'
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.css']
})

export class GodComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    const Info = this.authService.loadUserInfo();
    if (Info.userType !== "admin") {
      this.flashMessage.show("You must be a admin to access this page", {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/'])
    } else if (Info.messType !== "god") {
      this.flashMessage.show("You cannot access this page", {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/'])
    } else {
      this.router.navigate(['/god'])
    }
  }

  deleteDatabase () {
    const Info = localStorage.getItem('token-id')
    this.authService.god(Info).subscribe(data=>{
      console.log(data)
      if (data.data.success) {
        this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000})
        this.spinnerService.hide()
        this.router.navigate(['/'])
      } else {
        this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
        this.spinnerService.hide()
      }
    })
  }

}
