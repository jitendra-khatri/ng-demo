import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import { LeftPaneInfoComponent } from './components/left-pane-info/left-pane-info.component';
import { AgmCoreModule, MapsAPILoader  } from '@agm/core';
import { GLOBAL_VARIABLE } from './global';
import { AgmDirectionModule } from 'agm-direction';
import { MaidInformationComponent } from './components/maid-information/maid-information.component' ;
import { routing }        from './app.routing';

import { LoginComponent } from './components/login';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { BookingComponent } from './components/booking/booking.component';
import { RegisterComponent } from './components/register/register.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    routing,
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-4l4eh6M-NeNH8UDPaWyPeojHyFgRV5g',
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ],
declarations: [
        AppComponent,
        LoginComponent,
        
        ForgotPasswordComponent ,
        ResetPasswordComponent,
		LandingPageComponent,
		LeftPaneInfoComponent,
		MaidInformationComponent,
		BookingComponent,
		RegisterComponent,
		MainPageComponent,
		HeaderComponent,
		FooterComponent		],
  providers: [ GLOBAL_VARIABLE],
  bootstrap: [AppComponent]
})
export class AppModule { }