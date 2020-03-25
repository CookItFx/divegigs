import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-experience-hosting-create',
  templateUrl: './experience-hosting-create.component.html',
  styleUrls: ['./experience-hosting-create.component.css']
})
export class ExperienceHostingCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    this.router.navigate(['/experience-hosting/listings/2/location']);
  }

}
