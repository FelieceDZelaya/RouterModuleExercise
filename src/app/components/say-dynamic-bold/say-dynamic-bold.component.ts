import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {

  public sayBoldMessage : string;
  private myMessage : any;

  constructor(public router: ActivatedRoute) { }

  ngOnInit() {

    this.myMessage = this.router.params.subscribe(params => {
      this.sayBoldMessage = `Hello from inside say dynamic bold! My name is: ${params['message']}`;

      // In a real app: dispatch action to load the details here.
   });
    
  }
  
}
