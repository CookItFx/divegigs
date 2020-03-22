import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-s-adventures',
  templateUrl: './s-adventures.component.html',
  styleUrls: ['./s-adventures.component.css']
})
export class SAdventuresComponent implements OnInit {
  
  title = 'Discover | Adventures';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
