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
import {AuthGuard} from './guards/auth.guard'
import { ProfileComponent } from './components/profile/profile.component'
import { SettingComponent } from './components/setting/setting.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { MessBookComponent, DialogComponent } from './components/mess-book/mess-book.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule
  , MatInputModule, MatSelectModule, MatDialogModule, MatTableModule} from '@angular/material';

const appRoutes: Routes = [
  { path : 'register' , component : RegisterComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'activateUser' , component : ActivateAccountComponent},
  { path : 'profile' , component : ProfileComponent, canActivate: [AuthGuard]},
  { path : 'setting' , component : SettingComponent , canActivate: [AuthGuard]},
  { path : 'bookCoupon' , component : MessBookComponent , canActivate: [AuthGuard]},
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
    DialogComponent
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
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
