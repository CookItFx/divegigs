import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-size',
  templateUrl: './experience-guests-size.component.html',
  styleUrls: ['./experience-guests-size.component.css']
})
export class ExperienceGuestsSizeComponent implements OnInit {

  title = 'Experience | Guests size';

  pageHeading: string = 'Maximum group size';
  pageSteps: string = 'Step 15 of 19';
  pageDescription: string = 'Think about the group size that works best for your adventure. Should it be small and intimate? Is it fun with a large group?';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-requirements';

  sizeForm: FormGroup;
  submitted = false;

  guestsList = [
    { val: '1', name: '1'},
    { val: '2', name: '2'},
    { val: '3', name: '3'},
    { val: '4', name: '4'},
    { val: '5', name: '5' },
    { val: '6', name: '6' },
    { val: '7', name: '7' },
    { val: '8', name: '8' },
    { val: '9', name: '9' },
    { val: '10', name: '10' }
  ]

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.sizeForm = this.formBuilder.group({
      guests: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.sizeForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.sizeForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-duration']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.sizeForm.value));
      //console.log(this.sizeForm);
  }

}
