import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Http, HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DataSource } from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatGridListModule } from '@angular/material/grid-list';
import * as moment from 'moment';

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
  ];
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
    if (Info.userType !== 'admin') {
      this.flashMessage.show('You must be a admin to access this page', { cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['/']);
    } else if (Info.messType !== 'mess1') {
      this.flashMessage.show('You cannot access this page', { cssClass: 'alert-danger', timeout: 5000 });
      this.router.navigate(['/adminMess2Users']);
    } else {
      this.authService.getUsersMessDown().subscribe(data => {
        if (data.data.success) {
          this.displayedColumns = ['day', 'breakfast', 'lunch', 'dinner'];
          this.messDown = data.data.users;
          // tslint:disable-next-line:no-shadowed-variable
          // tslint:disable-next-line:no-trailing-whitespace
          this.costDown = this.messDown.map(t =>
            // tslint:disable-next-line:no-shadowed-variable
            t.couponDownMess.map(val => val.messdown.map(t => t.cost).reduce((acc, value) => acc + value, 0)));
          this.days = this.messDown.map(t => t.couponDownMess.map(val => val.messdown));
          this.costDown.forEach((val, index) => {
            for (this.i; this.i <= index; this.i++) {
              this.messDown[index].cost = val[0];
              this.messDown[index].index = index + 1;
              if (this.messDown[index].cost === 0) {
                (this.messDown[index]) = undefined;
              }
            }
          });

          this.messDown = this.messDown.filter((n) => n !== undefined);

          this.messDown.forEach((val, index) => {
            val.couponDownMess[0].messdown.forEach((result, item) => {
              switch (result.day) {
                case 'Monday':
                  const date = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year = (val.couponDownMess[0].createdAt).slice(6);
                  const temp = moment([Number(year), Number(month), Number(date)]).utcOffset('+05:30').add(0, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp.slice(0, 2);
                  break;
                case 'Tuesday':
                  const date1 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month1 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year1 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp1 = moment([Number(year1), Number(month1), Number(date1)]).utcOffset('+05:30').add(1, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp1.slice(0, 2);
                  break;
                case 'Wednesday':
                  const date2 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month2 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year2 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp2 = moment([Number(year2), Number(month2), Number(date2)]).utcOffset('+05:30').add(2, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp2.slice(0, 2);
                  break;
                case 'Thursday':
                  const date3 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month3 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year3 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp3 = moment([Number(year3), Number(month3), Number(date3)]).utcOffset('+05:30').add(3, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp3.slice(0, 2);
                  break;
                case 'Friday':
                  const date4 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month4 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year4 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp4 = moment([Number(year4), Number(month4), Number(date4)]).utcOffset('+05:30').add(4, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp4.slice(0, 2);
                  break;
                case 'Saturday':
                  const date5 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month5 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year5 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp5 = moment([Number(year5), Number(month5), Number(date5)]).utcOffset('+05:30').add(5, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp5.slice(0, 2);
                  break;

                case 'Sunday':
                  const date6 = (val.couponDownMess[0].createdAt).slice(0, 2);
                  const month6 = Number((val.couponDownMess[0].createdAt).slice(3, 5)) - Number(1);
                  const year6 = (val.couponDownMess[0].createdAt).slice(6);
                  // tslint:disable-next-line:max-line-length
                  const temp6 = moment([Number(year6), Number(month6), Number(date6)]).utcOffset('+05:30').add(6, 'days').format('DD-MM-YYYY');

                  result.day = result.day.slice(0, 3) + '/' + temp6.slice(0, 2);
                  break;
              }
            });
          });

        } else {
          this.message = data.message;
        }
      });
    }
  }

  print() {
    const divToPrint = document.getElementById('print-section');
    let htmlToPrint = '' +
      '<style type="text/css">' +
      'table {' +
      'border:5px solid #000;' +
      'padding:0px;' +
      'width: 100% !important;' +
      '}' +
      'td{' +
      'border:1px solid #000;' +
      'width: 100% !important;' +
      '}' +
      '</style>';
    htmlToPrint += divToPrint.outerHTML;
    const newWin = window.open('');
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  }

}
