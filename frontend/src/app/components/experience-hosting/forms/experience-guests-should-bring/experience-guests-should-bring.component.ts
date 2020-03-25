import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-guests-should-bring',
  templateUrl: './experience-guests-should-bring.component.html',
  styleUrls: ['./experience-guests-should-bring.component.css']
})
export class ExperienceGuestsShouldBringComponent implements OnInit {

  title = 'Experience | Guests should bring';

  pageHeading: string = 'Guests should bring';
  pageSteps: string = 'Step 9 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/what-i-will-provide';

  bringForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.bringForm = this.formBuilder.group({
      describe: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.bringForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.bringForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-title']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bringForm.value));
      //console.log(this.bringForm);
  }

}
