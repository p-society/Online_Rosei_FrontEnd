import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import {Http , HttpModule} from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object

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
}
