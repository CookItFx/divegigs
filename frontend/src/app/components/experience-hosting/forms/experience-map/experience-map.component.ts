import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-map',
  templateUrl: './experience-map.component.html',
  styleUrls: ['./experience-map.component.css']
})
export class ExperienceMapComponent implements OnInit {

  title = 'Experience | Area map';

  pageHeading: string = 'Where should guests meet you?';
  pageSteps: string = 'Step 12 of 19';
  pageDescription: string = 'Tell guests exactly where to meet you at the start of the experience. Make sure the location is easy to find.';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-photos';

  mapForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.mapForm = this.formBuilder.group({
      country: [''],
      street: [''],
      apt: [''],
      city: [''],
      state: [''],
      postal: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.mapForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.mapForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-notes']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.mapForm.value));
      //console.log(this.mapForm);
  }

}
