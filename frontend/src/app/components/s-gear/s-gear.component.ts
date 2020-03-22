import { Component, OnInit } from '@angular/core';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-s-gear',
  templateUrl: './s-gear.component.html',
  styleUrls: ['./s-gear.component.css']
})
export class SGearComponent implements OnInit {
  
  title = 'Discover | Gear & Equipment';

  constructor(private meta: Meta, private titleService: Title) {
    
  }
  ngOnInit() {
    
    this.titleService.setTitle(this.title);

  }

}
