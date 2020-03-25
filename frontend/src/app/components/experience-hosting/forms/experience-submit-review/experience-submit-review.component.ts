import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-submit-review',
  templateUrl: './experience-submit-review.component.html',
  styleUrls: ['./experience-submit-review.component.css']
})
export class ExperienceSubmitReviewComponent implements OnInit {

  title = 'Experience | Submit and review';

  pageHeading: string = 'Submit and review';
  pageSteps: string = '';
  pageDescription: string = '';
  formBtnText: string = 'Submit and Exit';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-booking';

  reviewForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.reviewForm = this.formBuilder.group({
        xx: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.reviewForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.reviewForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reviewForm.value));
      //console.log(this.reviewForm);
  }

}
