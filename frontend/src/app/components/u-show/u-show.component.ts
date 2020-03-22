import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-u-show',
  templateUrl: './u-show.component.html',
  styleUrls: ['./u-show.component.css']
})
export class UShowComponent implements OnInit {
  
  title = 'User | ';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
