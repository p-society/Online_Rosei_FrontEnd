import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import {Http , HttpModule} from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    if (!this.authService.loggedIn()) {
      this.authService.activateUser(this.router.currentUrlTree.queryParams).subscribe(data=>{
        this.spinnerService.show()
        if (data.data.success === false ) {
          this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
          this.spinnerService.hide()
          this.router.navigate(['/activateUser'])
        } else if (data.data.success === true) {
          this.spinnerService.hide()
          this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000})
          this.router.navigate(['/login'])
        }
      })
    } else {
      this.router.navigate(['/'])
    }
  }
}
