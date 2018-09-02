import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service'
import { Http, HttpModule } from '@angular/http'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object
  couponData: Object
  messDown: any;
  messUp: any;
  displayedColumns: any;
  costDown: any;
  costUp: any;
  message: string;
  bookedDate: string;
  bookedTill: string;

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

    const Info = this.authService.loadUserInfo();
    if (Info.userType === "admin") {
      this.router.navigate(['/'])
    }

    this.authService.getCoupon().subscribe(data => {
      if (data.data.success) {
        this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner', 'cost'];
        this.messDown = data.data.bookedCouponDown.messdown
        this.messUp = data.data.bookedCouponUp.messup
        this.costDown = this.messDown.map(t => t.cost).reduce((acc, value) => acc + value, 0);
        this.costUp = this.messUp.map(t => t.cost).reduce((acc, value) => acc + value, 0);
        this.bookedDate = data.data.bookedCouponUp.createdAt || data.data.bookedCouponDown.createdAt;
        this.bookedTill = data.data.bookedCouponUp.createdTill || data.data.bookedCouponDown.createdTill;
      } else {
        this.message = data.message
      }
    })
  }
}
