import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = environment.title;

   constructor(public router: Router) {
     
   }

   sayLight() {
      this.router.navigate(['/sayLight']);
   }

   sayBold() {
      this.router.navigate(['/sayDynamicBold',{message : 'Feliece Zelaya'}]); 
   }



}
