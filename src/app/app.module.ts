import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SayDynamicBoldComponent } from './components/say-dynamic-bold/say-dynamic-bold.component';
import { SayLightComponent } from './components/say-light/say-light.component';

const myRoutes : Routes = [ 

  //{ path : 'app' , component : AppComponent },
  //{ path : '' , redirectTo : '/app', pathMatch : 'full' },

  { path : 'sayLight' , component : SayLightComponent },
  { path : 'sayDynamicBold' , 
    component : SayDynamicBoldComponent,
    data : { message: 'My message here' } }
   
];

@NgModule({
  declarations: [
    AppComponent,
    SayDynamicBoldComponent,
    SayLightComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
