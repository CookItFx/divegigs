import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-s-destinations',
  templateUrl: './s-destinations.component.html',
  styleUrls: ['./s-destinations.component.css']
})
export class SDestinationsComponent implements OnInit {
  
  title = 'Discover | Destinations';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
