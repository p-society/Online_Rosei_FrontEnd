import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
<<<<<<< HEAD
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FlashMessagesService } from 'angular2-flash-messages';
=======
import { Http , HttpModule } from '@angular/http'
import {Router} from '@angular/router'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../services/auth.service'
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import {FlashMessagesService} from 'angular2-flash-messages'
>>>>>>> added edit coupon feature

@Component({
  selector: 'app-edit-coupons',
  templateUrl: './edit-coupons.component.html',
  styleUrls: ['./edit-coupons.component.css']
})
export class EditCouponsComponent implements OnInit {
<<<<<<< HEAD
  @ViewChild('submitButton') submitButton: ElementRef;

  user: Object;
  couponData: Object;
=======
  @ViewChild('submitButton') submitButton:ElementRef;

  user: Object
  couponData: Object
>>>>>>> added edit coupon feature
  messDown: any;
  messUp: any;
  costDown: any;
  costUp: any;
  message: string;
  bookedDate: string;

  BreakFastValue: number;
  LunchValue: number;
  DinnerValue: number;
  BreakFastBody: any;

  constructor(
    private http: Http,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private flashMessage: FlashMessagesService,
  ) {
<<<<<<< HEAD
  }
=======
   }
>>>>>>> added edit coupon feature

  // checking when page is loaded
  ngOnInit() {
    this.authService.getCoupon().subscribe(data => {
<<<<<<< HEAD
      if (data.data.success) {
        this.messDown = data.data.bookedCouponDown.messdown;
        this.messUp = data.data.bookedCouponUp.messup;
        this.costDown = this.messDown.map(t => t.cost).reduce((acc, value) => acc + value, 0);
        this.costUp = this.messUp.map(t => t.cost).reduce((acc, value) => acc + value, 0);
        this.bookedDate = data.data.bookedCouponUp.createdAt || data.data.bookedCouponDown.createdAt;
      } else {
        this.message = data.message;
      }
    });

    const Info = this.authService.loadUserInfo();
    if (Info.userType === 'admin') {
      this.router.navigate(['/']);
    }
  }

  bookCoupon() {
=======
        if (data.data.success) {
          this.messDown= data.data.bookedCouponDown.messdown
          this.messUp = data.data.bookedCouponUp.messup
          this.costDown = this.messDown.map(t => t.cost).reduce((acc, value) => acc + value, 0);
          this.costUp = this.messUp.map(t => t.cost).reduce((acc, value) => acc + value, 0);
          this.bookedDate = data.data.bookedCouponUp.createdAt || data.data.bookedCouponDown.createdAt;
        } else {
          this.message = data.message
        }
    })

    const Info =this.authService.loadUserInfo();
    if (Info.userType === "admin") {
      this.router.navigate(['/'])
    }
  }

  bookCoupon(){
>>>>>>> added edit coupon feature
    const arrMess1 = [];
    const arrMess2 = [];
    const breakfastMess1 = {};
    const lunchMess1 = {};
    const dinnerMess1 = {};
    const breakfastMess2 = {};
    const lunchMess2 = {};
    const dinnerMess2 = {};
    // mess 1
<<<<<<< HEAD
    arrMess1.push({
      breakfast: {
        monBrVegNon: this.messDown[0].breakfast,
        tuesBrVegNon: this.messDown[1].breakfast,
        wedBrVegNon: this.messDown[2].breakfast,
        thuBrVegNon: this.messDown[3].breakfast,
        friBrVegNon: this.messDown[4].breakfast,
        satBrVegNon: this.messDown[5].breakfast,
        sunBrVegNon: this.messDown[6].breakfast
      },
      lunch: {
        monLunVegNon: this.messDown[0].lunch,
        tuesLunVegNon: this.messDown[1].lunch,
        wedLunVegNon: this.messDown[2].lunch,
        thuLunVegNon: this.messDown[3].lunch,
        friLunVegNon: this.messDown[4].lunch,
        satLunVegNon: this.messDown[5].lunch,
        sunLunVegNon: this.messDown[6].lunch
      },
      dinner: {
        monDinvegNon: this.messDown[0].dinner,
        tuesDinVegNon: this.messDown[1].dinner,
        wedDinvegNon: this.messDown[2].dinner,
        thuDinvegNon: this.messDown[3].dinner,
        friDinvegNon: this.messDown[4].dinner,
        satDinvegNon: this.messDown[5].dinner,
        sunDinvegNon: this.messDown[6].dinner
      }
    });

    // mess 2
    arrMess2.push({
      breakfast: {
        monBrVegNon: this.messUp[0].breakfast,
        tuesBrVegNon: this.messUp[1].breakfast,
        wedBrVegNon: this.messUp[2].breakfast,
        thuBrVegNon: this.messUp[3].breakfast,
        friBrVegNon: this.messUp[4].breakfast,
        satBrVegNon: this.messUp[5].breakfast,
        sunBrVegNon: this.messUp[6].breakfast
      },
      lunch: {
        monLunVegNon: this.messUp[0].lunch,
        tuesLunVegNon: this.messUp[1].lunch,
        wedLunVegNon: this.messUp[2].lunch,
        thuLunVegNon: this.messUp[3].lunch,
        friLunVegNon: this.messUp[4].lunch,
        satLunVegNon: this.messUp[5].lunch,
        sunLunVegNon: this.messUp[6].lunch
      },
      dinner: {
        monDinvegNon: this.messUp[0].dinner,
        tuesDinVegNon: this.messUp[1].dinner,
        wedDinvegNon: this.messUp[2].dinner,
        thuDinvegNon: this.messUp[3].dinner,
        friDinvegNon: this.messUp[4].dinner,
        satDinvegNon: this.messUp[5].dinner,
        sunDinvegNon: this.messUp[6].dinner
      }
    });

    // Mess 1 breakfast
    Object.values(arrMess1[0].breakfast).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        breakfastMess1[index] = {
          val: val,
          cost: 10
        };
      }
    });

    // Mess 1 Lunch
    Object.values(arrMess1[0].lunch).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        lunchMess1[index] = {
          val,
          cost: 25
        };
      }
    });

    // Mess 1 dinner
    Object.values(arrMess1[0].dinner).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        dinnerMess1[index] = {
          val,
          cost: 25
        };
      }
    });

    // Mess 2 breakfast
    Object.values(arrMess2[0].breakfast).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        breakfastMess2[index] = {
          val,
          cost: 10
        };
      }
    });

    // Mess 2 Lunch
    Object.values(arrMess2[0].lunch).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        lunchMess2[index] = {
          val,
          cost: 25
        };
      }
    });

    // Mess 2 dinner
    Object.values(arrMess2[0].dinner).forEach((val, index: any) => {
      if (val !== undefined) {
        switch (index) {
          case 0:
            index = 'Monday';
            break;
          case 1:
            index = 'Tuesday';
            break;
          case 2:
            index = 'Wednesday';
            break;
          case 3:
            index = 'Thursday';
            break;
          case 4:
            index = 'Friday';
            break;
          case 5:
            index = 'Saturday';
            break;
          case 6:
            index = 'Sunday';
            break;
        }
        dinnerMess2[index] = {
          val,
          cost: 25
        };
      }
    });

    // Sending data to backend
    const body = {
      mess1: {
        breakfastMess1: breakfastMess1,
        lunchMess1: lunchMess1,
        dinnerMess1: dinnerMess1,
      },
      mess2: {
        breakfastMess2: breakfastMess2,
        lunchMess2: lunchMess2,
        dinnerMess2: dinnerMess2,
      }
    };

    const dialogRef = this.dialog.open(DialogComponentEdit, {
=======
      arrMess1.push({
        breakfast: {
          monBrVegNon: this.messDown[0].breakfast,
          tuesBrVegNon: this.messDown[1].breakfast,
          wedBrVegNon: this.messDown[2].breakfast,
          thuBrVegNon: this.messDown[3].breakfast,
          friBrVegNon: this.messDown[4].breakfast,
          satBrVegNon: this.messDown[5].breakfast,
          sunBrVegNon: this.messDown[6].breakfast
        },
        lunch: {
          monLunVegNon: this.messDown[0].lunch,
          tuesLunVegNon: this.messDown[1].lunch,
          wedLunVegNon: this.messDown[2].lunch,
          thuLunVegNon: this.messDown[3].lunch,
          friLunVegNon: this.messDown[4].lunch,
          satLunVegNon: this.messDown[5].lunch,
          sunLunVegNon: this.messDown[6].lunch
        },
        dinner: {
          monDinvegNon: this.messDown[0].dinner,
          tuesDinVegNon: this.messDown[1].dinner,
          wedDinvegNon: this.messDown[2].dinner,
          thuDinvegNon: this.messDown[3].dinner,
          friDinvegNon: this.messDown[4].dinner,
          satDinvegNon: this.messDown[5].dinner,
          sunDinvegNon: this.messDown[6].dinner
        }
      });

      // mess 2
      arrMess2.push({
        breakfast: {
          monBrVegNon: this.messUp[0].breakfast,
          tuesBrVegNon: this.messUp[1].breakfast,
          wedBrVegNon: this.messUp[2].breakfast,
          thuBrVegNon: this.messUp[3].breakfast,
          friBrVegNon: this.messUp[4].breakfast,
          satBrVegNon: this.messUp[5].breakfast,
          sunBrVegNon: this.messUp[6].breakfast
        },
        lunch: {
          monLunVegNon: this.messUp[0].lunch,
          tuesLunVegNon: this.messUp[1].lunch,
          wedLunVegNon: this.messUp[2].lunch,
          thuLunVegNon: this.messUp[3].lunch,
          friLunVegNon: this.messUp[4].lunch,
          satLunVegNon: this.messUp[5].lunch,
          sunLunVegNon: this.messUp[6].lunch
        },
        dinner: {
          monDinvegNon: this.messUp[0].dinner,
          tuesDinVegNon: this.messUp[1].dinner,
          wedDinvegNon: this.messUp[2].dinner,
          thuDinvegNon: this.messUp[3].dinner,
          friDinvegNon: this.messUp[4].dinner,
          satDinvegNon: this.messUp[5].dinner,
          sunDinvegNon: this.messUp[6].dinner
        }
      });

      // Mess 1 breakfast
      Object.values(arrMess1[0].breakfast).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          breakfastMess1[index] = {
            val:val,
            cost: 10
          }
        }
      });

      // Mess 1 Lunch
      Object.values(arrMess1[0].lunch).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          lunchMess1[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 1 dinner
      Object.values(arrMess1[0].dinner).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          dinnerMess1[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 2 breakfast
      Object.values(arrMess2[0].breakfast).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          breakfastMess2[index] = {
            val,
            cost: 10
          }
        }
      });

      // Mess 2 Lunch
      Object.values(arrMess2[0].lunch).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          lunchMess2[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 2 dinner
      Object.values(arrMess2[0].dinner).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          dinnerMess2[index] = {
            val,
            cost: 25
          }
        }
      });

      // Sending data to backend
      var body = {
        mess1: {
          breakfastMess1: breakfastMess1,
          lunchMess1: lunchMess1,
          dinnerMess1: dinnerMess1,
        },
        mess2: {
          breakfastMess2: breakfastMess2,
          lunchMess2: lunchMess2,
          dinnerMess2: dinnerMess2,
        }
    }

    let dialogRef = this.dialog.open(DialogComponentEdit, {
>>>>>>> added edit coupon feature
      width: '900px',
      data: body
    });

    // sending coupnons
    dialogRef.afterClosed().subscribe(result => {
<<<<<<< HEAD
      this.spinnerService.show();
      this.submitButton.nativeElement.disabled = true;
      if (this.checkBody(body)) {
        if (result) {
          this.authService.editCoupon(body).subscribe(data => {
            if (data.data.success === false) {
              this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 5000 });
              this.spinnerService.hide();
              this.submitButton.nativeElement.disabled = false;
            } else if (data.data.success === true) {
              this.spinnerService.hide();
              this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 5000 });
              this.router.navigate(['/profile']);
              this.submitButton.nativeElement.disabled = false;
            }
          });
        } else {
          this.spinnerService.hide();
          this.submitButton.nativeElement.disabled = false;
        }
      } else {
        this.flashMessage.show('Please select atleast one coupon', { cssClass: 'alert-danger', timeout: 8000 });
        this.spinnerService.hide();
=======
    this.spinnerService.show()
    this.submitButton.nativeElement.disabled = true;
      if (this.checkBody(body)) {
        if(result) {
        this.authService.editCoupon(body).subscribe(data=>{
          if (data.data.success === false ) {
            this.flashMessage.show(data.message, {cssClass: 'alert-danger', timeout: 5000})
            this.spinnerService.hide()
          } else if (data.data.success === true) {
            this.spinnerService.hide()
            this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000})
            this.router.navigate(['/profile'])
            this.submitButton.nativeElement.disabled = false;
          }
        })
        } else {
          this.spinnerService.hide()
          this.submitButton.nativeElement.disabled = false;
        }
      } else {
        this.flashMessage.show("Please select atleast one coupon", {cssClass: 'alert-danger', timeout: 8000})
        this.spinnerService.hide()
>>>>>>> added edit coupon feature
        this.submitButton.nativeElement.disabled = false;
      }
    });

  }

  checkBody(body) {
<<<<<<< HEAD
    console.log(body);
    if ((Object.keys(body.mess1.breakfastMess1).length === 0 && body.mess1.breakfastMess1.constructor === Object) &&
      (Object.keys(body.mess1.lunchMess1).length === 0 && body.mess1.lunchMess1.constructor === Object) &&
      (Object.keys(body.mess1.dinnerMess1).length === 0 && body.mess1.dinnerMess1.constructor === Object) &&
      (Object.keys(body.mess2.breakfastMess2).length === 0 && body.mess2.breakfastMess2.constructor === Object) &&
      (Object.keys(body.mess2.lunchMess2).length === 0 && body.mess2.lunchMess2.constructor === Object) &&
      (Object.keys(body.mess2.dinnerMess2).length === 0 && body.mess2.dinnerMess2.constructor === Object)
    ) {
      return false;
    } else {
      return true;
    }
=======
    console.log(body)
    if ((Object.keys(body.mess1.breakfastMess1).length === 0 && body.mess1.breakfastMess1.constructor === Object) &&
        (Object.keys(body.mess1.lunchMess1).length === 0 && body.mess1.lunchMess1.constructor === Object) &&
        (Object.keys(body.mess1.dinnerMess1).length === 0 && body.mess1.dinnerMess1.constructor === Object) &&
        (Object.keys(body.mess2.breakfastMess2).length === 0 && body.mess2.breakfastMess2.constructor === Object) &&
        (Object.keys(body.mess2.lunchMess2).length === 0 && body.mess2.lunchMess2.constructor === Object) &&
        (Object.keys(body.mess2.dinnerMess2).length === 0 && body.mess2.dinnerMess2.constructor === Object)
      ) {
        return false
      } else {
        return true
      }
>>>>>>> added edit coupon feature
  }
}

export interface MessElement {
  day: string;
  breakfast: any;
  lunch: any;
  dinner: any;
  cost: any;
}


@Component({
<<<<<<< HEAD
  // tslint:disable-next-line:component-selector
=======
>>>>>>> added edit coupon feature
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
  styleUrls: ['dialog-component.css']
})
<<<<<<< HEAD
// tslint:disable-next-line:component-class-suffix
=======
>>>>>>> added edit coupon feature
export class DialogComponentEdit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
<<<<<<< HEAD
  }

  DATA1_EDIT: MessElement[] = [
    {
      day: 'Monday',
      breakfast: this.data.mess1.breakfastMess1.Monday ? this.data.mess1.breakfastMess1.Monday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Monday ? this.data.mess1.lunchMess1.Monday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Monday ? this.data.mess1.dinnerMess1.Monday.val : undefined,
      cost: this.checkCost(this.data.mess1.breakfastMess1.Monday, this.data.mess1.lunchMess1.Monday, this.data.mess1.dinnerMess1.Monday)
    },
    {
      day: 'Tuesday',
      breakfast: this.data.mess1.breakfastMess1.Tuesday ? this.data.mess1.breakfastMess1.Tuesday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Tuesday ? this.data.mess1.lunchMess1.Tuesday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Tuesday ? this.data.mess1.dinnerMess1.Tuesday.val : undefined,
      cost: this.checkCost(this.data.mess1.breakfastMess1.Tuesday, this.data.mess1.lunchMess1.Tuesday, this.data.mess1.dinnerMess1.Tuesday)
    },
    {
      day: 'Wednesday',
      breakfast: this.data.mess1.breakfastMess1.Wednesday ? this.data.mess1.breakfastMess1.Wednesday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Wednesday ? this.data.mess1.lunchMess1.Wednesday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Wednesday ? this.data.mess1.dinnerMess1.Wednesday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess1.breakfastMess1.Wednesday, this.data.mess1.lunchMess1.Wednesday, this.data.mess1.dinnerMess1.Wednesday)
    },
    {
      day: 'Thursday',
      breakfast: this.data.mess1.breakfastMess1.Thursday ? this.data.mess1.breakfastMess1.Thursday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Thursday ? this.data.mess1.lunchMess1.Thursday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Thursday ? this.data.mess1.dinnerMess1.Thursday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess1.breakfastMess1.Thursday, this.data.mess1.lunchMess1.Thursday, this.data.mess1.dinnerMess1.Thursday)
    },
    {
      day: 'Friday',
      breakfast: this.data.mess1.breakfastMess1.Friday ? this.data.mess1.breakfastMess1.Friday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Friday ? this.data.mess1.lunchMess1.Friday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Friday ? this.data.mess1.dinnerMess1.Friday.val : undefined,
      cost: this.checkCost(this.data.mess1.breakfastMess1.Friday, this.data.mess1.lunchMess1.Friday, this.data.mess1.dinnerMess1.Friday)
    },
    {
      day: 'Saturday',
      breakfast: this.data.mess1.breakfastMess1.Saturday ? this.data.mess1.breakfastMess1.Saturday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Saturday ? this.data.mess1.lunchMess1.Saturday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Saturday ? this.data.mess1.dinnerMess1.Saturday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess1.breakfastMess1.Saturday, this.data.mess1.lunchMess1.Saturday, this.data.mess1.dinnerMess1.Saturday)
    },
    {
      day: 'Sunday',
      breakfast: this.data.mess1.breakfastMess1.Sunday ? this.data.mess1.breakfastMess1.Sunday.val : undefined,
      lunch: this.data.mess1.lunchMess1.Sunday ? this.data.mess1.lunchMess1.Sunday.val : undefined,
      dinner: this.data.mess1.dinnerMess1.Sunday ? this.data.mess1.dinnerMess1.Sunday.val : undefined,
      cost: this.checkCost(this.data.mess1.breakfastMess1.Sunday, this.data.mess1.lunchMess1.Sunday, this.data.mess1.dinnerMess1.Sunday)
    }
  ];

  // MESS 2 DATA
  DATA2_EDIT: MessElement[] = [
    {
      day: 'Monday',
      breakfast: this.data.mess2.breakfastMess2.Monday ? this.data.mess2.breakfastMess2.Monday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Monday ? this.data.mess2.lunchMess2.Monday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Monday ? this.data.mess2.dinnerMess2.Monday.val : undefined,
      cost: this.checkCost(this.data.mess2.breakfastMess2.Monday, this.data.mess2.lunchMess2.Monday, this.data.mess2.dinnerMess2.Monday)
    },
    {
      day: 'Tuesday',
      breakfast: this.data.mess2.breakfastMess2.Tuesday ? this.data.mess2.breakfastMess2.Tuesday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Tuesday ? this.data.mess2.lunchMess2.Tuesday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Tuesday ? this.data.mess2.dinnerMess2.Tuesday.val : undefined,
      cost: this.checkCost(this.data.mess2.breakfastMess2.Tuesday, this.data.mess2.lunchMess2.Tuesday, this.data.mess2.dinnerMess2.Tuesday)
    },
    {
      day: 'Wednesday',
      breakfast: this.data.mess2.breakfastMess2.Wednesday ? this.data.mess2.breakfastMess2.Wednesday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Wednesday ? this.data.mess2.lunchMess2.Wednesday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Wednesday ? this.data.mess2.dinnerMess2.Wednesday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess2.breakfastMess2.Wednesday, this.data.mess2.lunchMess2.Wednesday, this.data.mess2.dinnerMess2.Wednesday)
    },
    {
      day: 'Thursday',
      breakfast: this.data.mess2.breakfastMess2.Thursday ? this.data.mess2.breakfastMess2.Thursday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Thursday ? this.data.mess2.lunchMess2.Thursday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Thursday ? this.data.mess2.dinnerMess2.Thursday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess2.breakfastMess2.Thursday, this.data.mess2.lunchMess2.Thursday, this.data.mess2.dinnerMess2.Thursday)
    },
    {
      day: 'Friday',
      breakfast: this.data.mess2.breakfastMess2.Friday ? this.data.mess2.breakfastMess2.Friday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Friday ? this.data.mess2.lunchMess2.Friday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Friday ? this.data.mess2.dinnerMess2.Friday.val : undefined,
      cost: this.checkCost(this.data.mess2.breakfastMess2.Friday, this.data.mess2.lunchMess2.Friday, this.data.mess2.dinnerMess2.Friday)
    },
    {
      day: 'Saturday',
      breakfast: this.data.mess2.breakfastMess2.Saturday ? this.data.mess2.breakfastMess2.Saturday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Saturday ? this.data.mess2.lunchMess2.Saturday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Saturday ? this.data.mess2.dinnerMess2.Saturday.val : undefined,
      // tslint:disable-next-line:max-line-length
      cost: this.checkCost(this.data.mess2.breakfastMess2.Saturday, this.data.mess2.lunchMess2.Saturday, this.data.mess2.dinnerMess2.Saturday)
    },
    {
      day: 'Sunday',
      breakfast: this.data.mess2.breakfastMess2.Sunday ? this.data.mess2.breakfastMess2.Sunday.val : undefined,
      lunch: this.data.mess2.lunchMess2.Sunday ? this.data.mess2.lunchMess2.Sunday.val : undefined,
      dinner: this.data.mess2.dinnerMess2.Sunday ? this.data.mess2.dinnerMess2.Sunday.val : undefined,
      cost: this.checkCost(this.data.mess2.breakfastMess2.Sunday, this.data.mess2.lunchMess2.Sunday, this.data.mess2.dinnerMess2.Sunday)
    }
  ];

  checkCost(val1, val2, val3) {
    if (val1 === undefined && val2 === undefined && val3 === undefined) {
      return 0;
    } else if (val1 === undefined && val2 === undefined) {
      return val3.cost;
    } else if (val2 === undefined && val3 === undefined) {
      return val1.cost;
    } else if (val3 === undefined && val1 === undefined) {
      return val2.cost;
    } else if (val1 === undefined) {
      return val2.cost + val3.cost;
    } else if (val2 === undefined) {
      return val1.cost + val3.cost;
    } else if (val3 === undefined) {
      return val1.cost + val2.cost;
    } else {
      return val1.cost + val2.cost + val3.cost;
    }
  }

  getTotalCostMess1() {
    return this.DATA1_EDIT.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getTotalCostMess2() {
    return this.DATA2_EDIT.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  // tslint:disable-next-line:member-ordering
  displayedColumns: string[] = ['day', 'breakfast', 'lunch', 'dinner', 'cost'];
  // tslint:disable-next-line:member-ordering
  dataSource1 = this.DATA1_EDIT;
  // tslint:disable-next-line:member-ordering
  dataSource2 = this.DATA2_EDIT;
=======
    }

    DATA1_EDIT: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess1.breakfastMess1.Monday ? this.data.mess1.breakfastMess1.Monday.val : undefined,
        lunch: this.data.mess1.lunchMess1.Monday ? this.data.mess1.lunchMess1.Monday.val : undefined,
        dinner: this.data.mess1.dinnerMess1.Monday ? this.data.mess1.dinnerMess1.Monday.val : undefined,
        cost: this.checkCost(this.data.mess1.breakfastMess1.Monday, this.data.mess1.lunchMess1.Monday, this.data.mess1.dinnerMess1.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess1.breakfastMess1.Tuesday ? this.data.mess1.breakfastMess1.Tuesday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Tuesday ? this.data.mess1.lunchMess1.Tuesday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Tuesday ? this.data.mess1.dinnerMess1.Tuesday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Tuesday, this.data.mess1.lunchMess1.Tuesday, this.data.mess1.dinnerMess1.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess1.breakfastMess1.Wednesday ? this.data.mess1.breakfastMess1.Wednesday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Wednesday ? this.data.mess1.lunchMess1.Wednesday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Wednesday ? this.data.mess1.dinnerMess1.Wednesday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Wednesday, this.data.mess1.lunchMess1.Wednesday, this.data.mess1.dinnerMess1.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess1.breakfastMess1.Thursday ? this.data.mess1.breakfastMess1.Thursday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Thursday ? this.data.mess1.lunchMess1.Thursday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Thursday ? this.data.mess1.dinnerMess1.Thursday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Thursday, this.data.mess1.lunchMess1.Thursday, this.data.mess1.dinnerMess1.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess1.breakfastMess1.Friday ? this.data.mess1.breakfastMess1.Friday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Friday ? this.data.mess1.lunchMess1.Friday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Friday ? this.data.mess1.dinnerMess1.Friday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Friday, this.data.mess1.lunchMess1.Friday, this.data.mess1.dinnerMess1.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess1.breakfastMess1.Saturday ? this.data.mess1.breakfastMess1.Saturday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Saturday ? this.data.mess1.lunchMess1.Saturday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Saturday ? this.data.mess1.dinnerMess1.Saturday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Saturday, this.data.mess1.lunchMess1.Saturday, this.data.mess1.dinnerMess1.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess1.breakfastMess1.Sunday ? this.data.mess1.breakfastMess1.Sunday.val : undefined,
       lunch: this.data.mess1.lunchMess1.Sunday ? this.data.mess1.lunchMess1.Sunday.val : undefined,
       dinner: this.data.mess1.dinnerMess1.Sunday ? this.data.mess1.dinnerMess1.Sunday.val : undefined,
       cost: this.checkCost(this.data.mess1.breakfastMess1.Sunday, this.data.mess1.lunchMess1.Sunday, this.data.mess1.dinnerMess1.Sunday)
     }
    ]

    // MESS 2 DATA
    DATA2_EDIT: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess2.breakfastMess2.Monday ? this.data.mess2.breakfastMess2.Monday.val : undefined,
        lunch: this.data.mess2.lunchMess2.Monday ? this.data.mess2.lunchMess2.Monday.val : undefined,
        dinner: this.data.mess2.dinnerMess2.Monday ? this.data.mess2.dinnerMess2.Monday.val : undefined,
        cost: this.checkCost(this.data.mess2.breakfastMess2.Monday, this.data.mess2.lunchMess2.Monday, this.data.mess2.dinnerMess2.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess2.breakfastMess2.Tuesday ? this.data.mess2.breakfastMess2.Tuesday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Tuesday ? this.data.mess2.lunchMess2.Tuesday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Tuesday ? this.data.mess2.dinnerMess2.Tuesday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Tuesday, this.data.mess2.lunchMess2.Tuesday, this.data.mess2.dinnerMess2.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess2.breakfastMess2.Wednesday ? this.data.mess2.breakfastMess2.Wednesday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Wednesday ? this.data.mess2.lunchMess2.Wednesday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Wednesday ? this.data.mess2.dinnerMess2.Wednesday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Wednesday, this.data.mess2.lunchMess2.Wednesday, this.data.mess2.dinnerMess2.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess2.breakfastMess2.Thursday ? this.data.mess2.breakfastMess2.Thursday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Thursday ? this.data.mess2.lunchMess2.Thursday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Thursday ? this.data.mess2.dinnerMess2.Thursday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Thursday, this.data.mess2.lunchMess2.Thursday, this.data.mess2.dinnerMess2.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess2.breakfastMess2.Friday ? this.data.mess2.breakfastMess2.Friday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Friday ? this.data.mess2.lunchMess2.Friday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Friday ? this.data.mess2.dinnerMess2.Friday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Friday, this.data.mess2.lunchMess2.Friday, this.data.mess2.dinnerMess2.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess2.breakfastMess2.Saturday ? this.data.mess2.breakfastMess2.Saturday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Saturday ? this.data.mess2.lunchMess2.Saturday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Saturday ? this.data.mess2.dinnerMess2.Saturday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Saturday, this.data.mess2.lunchMess2.Saturday, this.data.mess2.dinnerMess2.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess2.breakfastMess2.Sunday ? this.data.mess2.breakfastMess2.Sunday.val : undefined,
       lunch: this.data.mess2.lunchMess2.Sunday ? this.data.mess2.lunchMess2.Sunday.val : undefined,
       dinner: this.data.mess2.dinnerMess2.Sunday ? this.data.mess2.dinnerMess2.Sunday.val : undefined,
       cost: this.checkCost(this.data.mess2.breakfastMess2.Sunday, this.data.mess2.lunchMess2.Sunday, this.data.mess2.dinnerMess2.Sunday)
     }
    ]

    checkCost(val1, val2, val3) {
      if (val1 === undefined && val2 === undefined && val3 === undefined) {
        return 0;
      } else if (val1 === undefined && val2 === undefined) {
        return val3.cost;
      } else if (val2 === undefined && val3 === undefined) {
        return val1.cost;
      } else if (val3 === undefined && val1 === undefined) {
        return val2.cost;
      } else if (val1 === undefined) {
        return val2.cost + val3.cost;
      } else if (val2 === undefined) {
        return val1.cost + val3.cost;
      } else if (val3 === undefined) {
        return val1.cost + val2.cost;
      } else {
        return val1.cost + val2.cost + val3.cost;
      }
    }

    getTotalCostMess1() {
      return this.DATA1_EDIT.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    getTotalCostMess2() {
      return this.DATA2_EDIT.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    displayedColumns: string[] = ['day','breakfast', 'lunch', 'dinner', 'cost'];
    dataSource1 = this.DATA1_EDIT;
    dataSource2 = this.DATA2_EDIT;
>>>>>>> added edit coupon feature
}
