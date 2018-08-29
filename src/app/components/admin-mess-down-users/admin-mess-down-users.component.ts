import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import { Http, HttpModule } from '@angular/http'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DataSource } from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-admin-mess-down-users',
  templateUrl: './admin-mess-down-users.component.html',
  styleUrls: ['./admin-mess-down-users.component.css']
})
export class AdminMessDownUsersComponent implements OnInit {

  users: any;
  displayedColumns: any;
  messDown: any;
  costDown: any;
  message: any;
  i: any;
  days: any;
  bricks = [
    { title: 'Brick 1' },
    { title: 'Brick 2' },
    { title: 'Brick 3' },
    { title: 'Brick 4' },
    { title: 'Brick 5' },
    { title: 'Brick 6' }
  ]
  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.i = 0;
  }

  ngOnInit() {
    const Info = this.authService.loadUserInfo();
    if (Info.userType !== "admin") {
      this.flashMessage.show("You must be a admin to access this page", { cssClass: 'alert-danger', timeout: 5000 })
      this.router.navigate(['/'])
    } else if (Info.messType !== "mess1") {
      this.flashMessage.show("You cannot access this page", { cssClass: 'alert-danger', timeout: 5000 })
      this.router.navigate(['/adminMess2Users'])
    }
    else {
      this.authService.getUsersMessDown().subscribe(data => {
        if (data.data.success) {
          this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner'];
          this.messDown = data.data.users
          this.costDown = this.messDown.map(t => t.couponDownMess.map(val => val.messdown.map(t => t.cost).reduce((acc, value) => acc + value, 0)));
          this.days = this.messDown.map(t => t.couponDownMess.map(val => val.messdown));
          this.costDown.forEach((val, index) => {
            for (this.i; this.i <= index; this.i++) {
              this.messDown[index].cost = val[0];
              this.messDown[index].index = index + 1;
              if (this.messDown[index].cost === 0) {
                (this.messDown[index]) = undefined
              }
            }
          })

          this.messDown = this.messDown.filter((n) => { return n !== undefined })

        } else {
          this.message = data.message
        }
      })
    }
  }

  print() {
    var divToPrint = document.getElementById('print-section');
    var htmlToPrint = '' +
      '<style type="text/css">' +
      'table {' +
<<<<<<< HEAD
      'border:5px solid #000;' +
      'padding:0px;' +
      'width: 100% !important;' +
      '}' +
      'td{' +
      'border:1px solid #000;' +
      'width: 100% !important;' +
=======
      'border:1px solid #000;' +
      'padding:0px;' +
      'width: auto;' +
>>>>>>> added edit coupon feature
      '}' +
      '</style>';
    htmlToPrint += divToPrint.outerHTML;
    var newWin = window.open('');
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  }

}
