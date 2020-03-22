import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
  styles: ['agm-map { height: 400px;, border: 1px solid #ccc; }'],
  /*template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType'>
    </agm-map>
  `*/
})

export class DestinationComponent implements OnInit {
  
  title = 'Destination | ';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  
  ngOnInit(){
    this.titleService.setTitle(this.title);
  }  
  
  //AGM
  latitude = 14.617605;
  longitude = 481.022935;
  zoom = 5;
  mapType = 'roadmap';
  //https://alligator.io/angular/angular-google-maps

}
