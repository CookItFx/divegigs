import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-experience-photos',
  templateUrl: './experience-photos.component.html',
  styleUrls: ['./experience-photos.component.css']
})
export class ExperiencePhotosComponent implements OnInit {

  title = 'Experience | Photos';

  pageHeading: string = 'Photos';
  pageSteps: string = 'Step 11 of 19';
  pageDescription: string = '';
  formBtnText: string = 'Continue';
  btnBackUrl: string = '/experience-hosting/listings/2/experience-title';

  photosForm: FormGroup;
  submitted = false;

  constructor(private meta: Meta, 
              private titleService: Title, 
              private formBuilder: FormBuilder,
              private router: Router) {
    
  }

  ngOnInit() {
    
    this.photosForm = this.formBuilder.group({
        xx: ['']
    });
    
    this.titleService.setTitle(this.title);

  }

  // convenience getter for easy access to form fields
  get f() { return this.photosForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.photosForm.invalid) {
          return;
      }else{
        this.router.navigate(['/experience-hosting/listings/2/experience-map']);
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.photosForm.value));
      //console.log(this.photosForm);
  }

}
