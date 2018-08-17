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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(data => {
        this.user = data.data.user
      })
    }
  }
  onlogout() {
    this.authService.loggedOut()
    this.router.navigate(['/login'])
  }
}
