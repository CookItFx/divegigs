import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-about-you',
  templateUrl: './experience-about-you.component.html',
  styleUrls: ['./experience-about-you.component.css']
})

export class ExperienceAboutYouComponent implements OnInit {

  title = 'Experience | About you';

  pageHeading: string = 'Tell us more about yourself?';
  pageSteps: string = 'Step 5 of 19';
  pageDescription: string = 'Describe yourself and your qualifications';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/your-background';

  aboutYouForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.aboutYouForm = this.formBuilder.group({
      qualifications: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.aboutYouForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.aboutYouForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/what-will-you-do']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.aboutYouForm.value));
      //console.log(this.aboutYouForm);
  }

}