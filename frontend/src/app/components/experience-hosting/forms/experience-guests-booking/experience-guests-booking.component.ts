import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-booking',
  templateUrl: './experience-guests-booking.component.html',
  styleUrls: ['./experience-guests-booking.component.css']
})
export class ExperienceGuestsBookingComponent implements OnInit {

  title = 'Experience | Guests booking';

  pageHeading: string = 'Booking settings';
  pageSteps: string = 'Step 18 of 19';
  pageDescription: string = 'We recommend setting your cutoff time close to your start time so more guests can book.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-pricing';

  bookingForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.bookingForm = this.formBuilder.group({
      cut_add_guests: [''],
      cut_first_guest: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.bookingForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.bookingForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/submit-review']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value));
      //console.log(this.bookingForm);
  }

}
