import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-pricing',
  templateUrl: './experience-guests-pricing.component.html',
  styleUrls: ['./experience-guests-pricing.component.css']
})
export class ExperienceGuestsPricingComponent implements OnInit {

  title = 'Experience | Guests pricing';

  pageHeading: string = 'Guests pricing';
  pageSteps: string = 'Step 17 of 19';
  pageDescription: string = "The price of your experience is entirely up to you. Play with the calculator to see how much you'd earn depending on the number of guests.";
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-duration';

  pricingForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.pricingForm = this.formBuilder.group({
      guest_pays: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.pricingForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.pricingForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-booking']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pricingForm.value));
      //console.log(this.pricingForm);
  }

}
