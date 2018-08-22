import { Component, OnInit } from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {Router} from  '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Object
  admin: string
  messDown: string
  messUp: string
  god: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(data => {
        this.user = data.data.user
      })
      // checking for admin
      const Info =this.authService.loadUserInfo();
      if (Info.userType === "admin") {
        this.admin = Info
        if (Info.messType === "mess1") {
          this.messDown = Info.messType
        }
        else if (Info.messType === "mess2"){
          this.messUp = Info.messType
        } else {
          this.god = Info.messType
        }
      }
    }
  }

  onlogout() {
    this.authService.loggedOut()
    this.router.navigate(['/login'])
  }
}
