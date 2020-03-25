import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-location',
  templateUrl: './experience-location.component.html',
  styleUrls: ['./experience-location.component.css']
})

export class ExperienceLocationComponent implements OnInit {
  
  title = 'Experiences | Location';

  pageHeading: string = 'Location';
  pageSteps: string = 'Step 1 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';

  locationForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.locationForm = this.formBuilder.group({
        autocomplete: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.locationForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.locationForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/type']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.locationForm.value));
      //console.log(this.locationForm);
  }

}

//https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
