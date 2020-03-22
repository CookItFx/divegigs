import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  
  title = 'Site Map';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
