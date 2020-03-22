import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-s-diveboards',
  templateUrl: './s-diveboards.component.html',
  styleUrls: ['./s-diveboards.component.css']
})
export class SDiveboardsComponent implements OnInit {
  
  title = 'Discover | Diveboards';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
