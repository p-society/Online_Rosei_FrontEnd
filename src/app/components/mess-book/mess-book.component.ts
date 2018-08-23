import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Http , HttpModule } from '@angular/http'
import {Router} from '@angular/router'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../services/auth.service'
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-mess-book',
  templateUrl: './mess-book.component.html',
  styleUrls: ['./mess-book.component.css']
})
export class MessBookComponent implements OnInit {
  @ViewChild('submitButton') submitButton:ElementRef;
  monBrVegNon : String;
  monLunVegNon : String;
  monDinvegNon: String;
  tuesBrVegNon: String;
  tuesLunVegNon: String;
  tuesDinvegNon: String;
  wedBrVegNon: String;
  wedLunVegNon: String;
  wedDinvegNon: String;
  thuBrVegNon: String;
  thuLunVegNon: String;
  thuDinvegNon: String;
  friBrVegNon: String;
  friLunVegNon: String
  friDinvegNon: String;
  satBrVegNon: String;
  satLunVegNon: String;
  satDinvegNon: String;
  sunBrVegNon: String;
  sunLunVegNon: String;
  sunDinvegNon: String;

  // 1st floor mess1
  monBrVegNon1 : String;
  monLunVegNon1 : String;
  monDinvegNon1: String;
  tuesBrVegNon1: String;
  tuesLunVegNon1: String;
  tuesDinvegNon1: String;
  wedBrVegNon1: String;
  wedLunVegNon1: String;
  wedDinvegNon1: String;
  thuBrVegNon1: String;
  thuLunVegNon1: String;
  thuDinvegNon1: String;
  friBrVegNon1: String;
  friLunVegNon1: String
  friDinvegNon1: String;
  satBrVegNon1: String;
  satLunVegNon1: String;
  satDinvegNon1: String;
  sunBrVegNon1: String;
  sunLunVegNon1: String;
  sunDinvegNon1: String;

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
   }

  // checking when page is loaded
  ngOnInit() {
    this.authService.getCoupon().subscribe(data => {
      if(data.data.success) {
        this.flashMessage.show("Coupon already booked for this week", {cssClass: 'alert-danger', timeout: 5000})
        this.router.navigate(['/profile'])
      }
    })

    const Info =this.authService.loadUserInfo();
    if (Info.userType === "admin") {
      this.router.navigate(['/'])
    }
  }

  bookCoupon(){
    const arrMess1 = [];
    const arrMess2 = [];
    const breakfastMess1 = {};
    const lunchMess1 = {};
    const dinnerMess1 = {};
    const breakfastMess2 = {};
    const lunchMess2 = {};
    const dinnerMess2 = {};
    // mess 1
      arrMess1.push({
        breakfast: {
          monBrVegNon: this.monBrVegNon,
          tuesBrVegNon: this.tuesBrVegNon,
          wedBrVegNon: this.wedBrVegNon,
          thuBrVegNon: this.thuBrVegNon,
          friBrVegNon: this.friBrVegNon,
          satBrVegNon: this.satBrVegNon,
          sunBrVegNon: this.sunBrVegNon
        },
        lunch: {
          monLunVegNon: this.monLunVegNon,
          tuesLunVegNon: this.tuesLunVegNon,
          wedLunVegNon: this.wedLunVegNon,
          thuLunVegNon: this.thuLunVegNon,
          friLunVegNon: this.friLunVegNon,
          satLunVegNon: this.satLunVegNon,
          sunLunVegNon: this.sunLunVegNon
        },
        dinner: {
          monDinvegNon: this.monDinvegNon,
          tuesDinVegNon: this.tuesDinvegNon,
          wedDinvegNon: this.wedDinvegNon,
          thuDinvegNon: this.thuDinvegNon,
          friDinvegNon: this.friDinvegNon,
          satDinvegNon: this.satDinvegNon,
          sunDinvegNon: this.sunDinvegNon
        }
      });

      // mess 2
      arrMess2.push({
        breakfast: {
          monBrVegNon: this.monBrVegNon1,
          tuesBrVegNon: this.tuesBrVegNon1,
          wedBrVegNon: this.wedBrVegNon1,
          thuBrVegNon: this.thuBrVegNon1,
          friBrVegNon: this.friBrVegNon1,
          satBrVegNon: this.satBrVegNon1,
          sunBrVegNon: this.sunBrVegNon1
        },
        lunch: {
          monLunVegNon: this.monLunVegNon1,
          tuesLunVegNon: this.tuesLunVegNon1,
          wedLunVegNon: this.wedLunVegNon1,
          thuLunVegNon: this.thuLunVegNon1,
          friLunVegNon: this.friLunVegNon1,
          satLunVegNon: this.satLunVegNon1,
          sunLunVegNon: this.sunLunVegNon1
        },
        dinner: {
          monDinvegNon: this.monDinvegNon1,
          tuesDinVegNon: this.tuesDinvegNon1,
          wedDinvegNon: this.wedDinvegNon1,
          thuDinvegNon: this.thuDinvegNon1,
          friDinvegNon: this.friDinvegNon1,
          satDinvegNon: this.satDinvegNon1,
          sunDinvegNon: this.sunDinvegNon1
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

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '900px',
      data: body
    });

    // sending coupnons
    dialogRef.afterClosed().subscribe(result => {
    this.spinnerService.show()
    this.submitButton.nativeElement.disabled = true;
      console.log(`Dialog closed: ${result}`);
      console.log(this.checkBody(body))
      if (this.checkBody(body)) {
        if(result) {
        this.authService.bookCoupon(body).subscribe(data=>{
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
        this.flashMessage.show("Please select atleast one coupon", {cssClass: 'alert-danger', timeout: 5000})
        this.spinnerService.hide()
        this.submitButton.nativeElement.disabled = false;
      }
    });

  }

  checkBody(body) {
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
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
  styleUrls: ['dialog-component.css']
})
export class DialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ELEMENT_DATA1: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess1.breakfastMess1.Monday ? this.data.mess1.breakfastMess1.Monday.val : "***",
        lunch: this.data.mess1.lunchMess1.Monday ? this.data.mess1.lunchMess1.Monday.val : "***",
        dinner: this.data.mess1.dinnerMess1.Monday ? this.data.mess1.dinnerMess1.Monday.val : "***",
        cost: this.checkCost(this.data.mess1.breakfastMess1.Monday, this.data.mess1.lunchMess1.Monday, this.data.mess1.dinnerMess1.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess1.breakfastMess1.Tuesday ? this.data.mess1.breakfastMess1.Tuesday.val : "***",
       lunch: this.data.mess1.lunchMess1.Tuesday ? this.data.mess1.lunchMess1.Tuesday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Tuesday ? this.data.mess1.dinnerMess1.Tuesday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Tuesday, this.data.mess1.lunchMess1.Tuesday, this.data.mess1.dinnerMess1.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess1.breakfastMess1.Wednesday ? this.data.mess1.breakfastMess1.Wednesday.val : "***",
       lunch: this.data.mess1.lunchMess1.Wednesday ? this.data.mess1.lunchMess1.Wednesday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Wednesday ? this.data.mess1.dinnerMess1.Wednesday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Wednesday, this.data.mess1.lunchMess1.Wednesday, this.data.mess1.dinnerMess1.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess1.breakfastMess1.Thursday ? this.data.mess1.breakfastMess1.Thursday.val : "***",
       lunch: this.data.mess1.lunchMess1.Thursday ? this.data.mess1.lunchMess1.Thursday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Thursday ? this.data.mess1.dinnerMess1.Thursday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Thursday, this.data.mess1.lunchMess1.Thursday, this.data.mess1.dinnerMess1.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess1.breakfastMess1.Friday ? this.data.mess1.breakfastMess1.Friday.val : "***",
       lunch: this.data.mess1.lunchMess1.Friday ? this.data.mess1.lunchMess1.Friday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Friday ? this.data.mess1.dinnerMess1.Friday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Friday, this.data.mess1.lunchMess1.Friday, this.data.mess1.dinnerMess1.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess1.breakfastMess1.Saturday ? this.data.mess1.breakfastMess1.Saturday.val : "***",
       lunch: this.data.mess1.lunchMess1.Saturday ? this.data.mess1.lunchMess1.Saturday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Saturday ? this.data.mess1.dinnerMess1.Saturday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Saturday, this.data.mess1.lunchMess1.Saturday, this.data.mess1.dinnerMess1.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess1.breakfastMess1.Sunday ? this.data.mess1.breakfastMess1.Sunday.val : "***",
       lunch: this.data.mess1.lunchMess1.Sunday ? this.data.mess1.lunchMess1.Sunday.val : "***",
       dinner: this.data.mess1.dinnerMess1.Sunday ? this.data.mess1.dinnerMess1.Sunday.val : "***",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Sunday, this.data.mess1.lunchMess1.Sunday, this.data.mess1.dinnerMess1.Sunday)
     }
    ]

    // MESS 2 DATA
    ELEMENT_DATA2: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess2.breakfastMess2.Monday ? this.data.mess2.breakfastMess2.Monday.val : "***",
        lunch: this.data.mess2.lunchMess2.Monday ? this.data.mess2.lunchMess2.Monday.val : "***",
        dinner: this.data.mess2.dinnerMess2.Monday ? this.data.mess2.dinnerMess2.Monday.val : "***",
        cost: this.checkCost(this.data.mess2.breakfastMess2.Monday, this.data.mess2.lunchMess2.Monday, this.data.mess2.dinnerMess2.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess2.breakfastMess2.Tuesday ? this.data.mess2.breakfastMess2.Tuesday.val : "***",
       lunch: this.data.mess2.lunchMess2.Tuesday ? this.data.mess2.lunchMess2.Tuesday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Tuesday ? this.data.mess2.dinnerMess2.Tuesday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Tuesday, this.data.mess2.lunchMess2.Tuesday, this.data.mess2.dinnerMess2.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess2.breakfastMess2.Wednesday ? this.data.mess2.breakfastMess2.Wednesday.val : "***",
       lunch: this.data.mess2.lunchMess2.Wednesday ? this.data.mess2.lunchMess2.Wednesday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Wednesday ? this.data.mess2.dinnerMess2.Wednesday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Wednesday, this.data.mess2.lunchMess2.Wednesday, this.data.mess2.dinnerMess2.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess2.breakfastMess2.Thursday ? this.data.mess2.breakfastMess2.Thursday.val : "***",
       lunch: this.data.mess2.lunchMess2.Thursday ? this.data.mess2.lunchMess2.Thursday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Thursday ? this.data.mess2.dinnerMess2.Thursday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Thursday, this.data.mess2.lunchMess2.Thursday, this.data.mess2.dinnerMess2.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess2.breakfastMess2.Friday ? this.data.mess2.breakfastMess2.Friday.val : "***",
       lunch: this.data.mess2.lunchMess2.Friday ? this.data.mess2.lunchMess2.Friday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Friday ? this.data.mess2.dinnerMess2.Friday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Friday, this.data.mess2.lunchMess2.Friday, this.data.mess2.dinnerMess2.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess2.breakfastMess2.Saturday ? this.data.mess2.breakfastMess2.Saturday.val : "***",
       lunch: this.data.mess2.lunchMess2.Saturday ? this.data.mess2.lunchMess2.Saturday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Saturday ? this.data.mess2.dinnerMess2.Saturday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Saturday, this.data.mess2.lunchMess2.Saturday, this.data.mess2.dinnerMess2.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess2.breakfastMess2.Sunday ? this.data.mess2.breakfastMess2.Sunday.val : "***",
       lunch: this.data.mess2.lunchMess2.Sunday ? this.data.mess2.lunchMess2.Sunday.val : "***",
       dinner: this.data.mess2.dinnerMess2.Sunday ? this.data.mess2.dinnerMess2.Sunday.val : "***",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Sunday, this.data.mess2.lunchMess2.Sunday, this.data.mess2.dinnerMess2.Sunday)
     }
    ]

    checkCost(val1, val2, val3) {
      if (val1 === undefined && val2 === undefined && val3 === undefined) {
        return 0
      }
      else if (val1 === undefined && val2 === undefined) {
        return val3.cost
      }
      else if (val2 === undefined && val3 === undefined) {
        return val1.cost
      }
      else if (val3 === undefined && val1 === undefined) {
        return val2.cost
      }
      else if (val1 === undefined) {
        return val2.cost + val3.cost
      }
      else if(val2 === undefined) {
        return val1.cost + val3.cost
      }
      else if(val3 === undefined) {
        return val1.cost + val2.cost
      }
      else {
        return val1.cost + val2.cost + val3.cost
      }
    }

    getTotalCostMess1() {
      return this.ELEMENT_DATA1.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    getTotalCostMess2() {
      return this.ELEMENT_DATA2.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    displayedColumns: string[] = ['day','breakfast', 'lunch', 'dinner', 'cost'];
    dataSource1 = this.ELEMENT_DATA1;
    dataSource2 = this.ELEMENT_DATA2;
}
