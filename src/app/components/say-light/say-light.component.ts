import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-light',
  templateUrl: './say-light.component.html',
  styleUrls: ['./say-light.component.css']
})
export class SayLightComponent implements OnInit {

  public sayLightMessage : string = "Hello from inside say light!";

  constructor() { }

  ngOnInit() {
    
  }

}
