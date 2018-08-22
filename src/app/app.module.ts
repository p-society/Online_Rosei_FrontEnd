import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import {Http, Headers , HttpModule} from '@angular/http'
import { RouterModule , Routes } from '@angular/router'
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner'

import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RegisterComponent } from './components/register/register.component'
import {AuthService} from './services/auth.service'
import { LoginComponent } from './components/login/login.component'
import { FlashMessagesModule } from 'angular2-flash-messages'
import {AuthGuard} from './guards'
import { ProfileComponent } from './components/profile/profile.component'
import { SettingComponent } from './components/setting/setting.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { MessBookComponent, DialogComponent } from './components/mess-book/mess-book.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule
  , MatInputModule, MatSelectModule, MatDialogModule, MatTableModule
  , MatExpansionModule, MatRadioModule} from '@angular/material';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMessDownComponent } from './components/admin-mess-down/admin-mess-down.component';
import { AdminMessDownUsersComponent } from './components/admin-mess-down-users/admin-mess-down-users.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdminMessUpComponent } from './components/admin-mess-up/admin-mess-up.component';
import { AdminMessUpUsersComponent } from './components/admin-mess-up-users/admin-mess-up-users.component';

const appRoutes: Routes = [
  { path : 'register' , component : RegisterComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'adminLogin' , component : AdminLoginComponent},
  { path : 'activateUser' , component : ActivateAccountComponent},
  { path : 'profile' , component : ProfileComponent, canActivate: [AuthGuard]},
  { path : 'setting' , component : SettingComponent , canActivate: [AuthGuard]},
  { path : 'bookCoupon' , component : MessBookComponent , canActivate: [AuthGuard]},
  { path : 'adminMess1' , component : AdminMessDownComponent , canActivate: [AuthGuard]},
  { path : 'adminMess1Users' , component : AdminMessDownUsersComponent , canActivate: [AuthGuard]},
  { path : 'adminMess2' , component : AdminMessUpComponent , canActivate: [AuthGuard]},
  { path : 'adminMess2Users' , component : AdminMessUpUsersComponent , canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SettingComponent,
    ActivateAccountComponent,
    MessBookComponent,
    DialogComponent,
    AdminLoginComponent,
    AdminMessDownComponent,
    AdminMessDownUsersComponent,
    AdminMessUpComponent,
    AdminMessUpUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
