import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftPaneInfoComponent } from './left-pane-info/left-pane-info.component';
import { AgmCoreModule, MapsAPILoader  } from '@agm/core';
import { GLOBAL_VARIABLE } from './global';
import { AgmDirectionModule } from 'agm-direction';
import { MaidInformationComponent } from './maid-information/maid-information.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeftPaneInfoComponent,
    MaidInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-4l4eh6M-NeNH8UDPaWyPeojHyFgRV5g',
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ],
  providers: [GLOBAL_VARIABLE],
  bootstrap: [AppComponent]
})
export class AppModule { }