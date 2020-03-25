import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';

import { SDiveboardsComponent } from './components/s-diveboards/s-diveboards.component';
import { SAdventuresComponent } from './components/s-adventures/s-adventures.component';
import { SExperiencesComponent } from './components/s-experiences/s-experiences.component';
import { SDestinationsComponent } from './components/s-destinations/s-destinations.component';
import { SGearComponent } from './components/s-gear/s-gear.component';

import { HelpComponent } from './components/help/help.component';
import { HelpAdviceComponent } from './components/help-advice/help-advice.component';
import { HelpCommunitiesComponent } from './components/help-communities/help-communities.component';
import { HelpEnvironmentComponent } from './components/help-environment/help-environment.component';
import { HelpAgenciesComponent } from './components/help-agencies/help-agencies.component';
import { HelpGearComponent } from './components/help-gear/help-gear.component';
import { HelpMarineLifeComponent } from './components/help-marine-life/help-marine-life.component';
import { HelpTravellingComponent } from './components/help-travelling/help-travelling.component';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

import { LoginComponent } from './components/login/login.component';
import { LoginForgotComponent } from './components/login-forgot/login-forgot.component';
import { LoginResetComponent } from './components/login-reset/login-reset.component';

import { SignupComponent } from './components/signup/signup.component';

import { ExperiencesComponent } from './components/experiences/experiences.component';
import { GearComponent } from './components/gear/gear.component';
import { DestinationComponent } from './components/destination/destination.component';

import { UShowComponent } from './components/u-show/u-show.component';

import { SiteMapComponent } from './components/site-map/site-map.component';

import { SavedComponent } from './components/saved/saved.component';
import { TripsComponent } from './components/trips/trips.component';

import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AccountSettingsPersonalInfoComponent } from './components/account-settings-personal-info/account-settings-personal-info.component';
import { AccountSettingsLoginSecurityComponent } from './components/account-settings-login-security/account-settings-login-security.component';
import { AccountSettingsPaymentsPayoutsComponent } from './components/account-settings-payments-payouts/account-settings-payments-payouts.component';
import { AccountSettingsNotificationsComponent } from './components/account-settings-notifications/account-settings-notifications.component';
import { AccountSettingsPreferencesComponent } from './components/account-settings-preferences/account-settings-preferences.component';

import { GlogsComponent } from './components/glogs/glogs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentsGuestsComponent } from './components/payments-guests/payments-guests.component';
import { PaymentsConfirmComponent } from './components/payments-confirm/payments-confirm.component';
import { PaymentsAuthoriseComponent } from './components/payments-authorise/payments-authorise.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

/* experience-hosting */
import { ExperienceHostingComponent } from './components/experience-hosting/experience-hosting.component';
import { ExperienceHostingCreateComponent } from './components/experience-hosting-create/experience-hosting-create.component';
import { ExperienceLocationComponent } from './components/experience-hosting/forms/experience-location/experience-location.component';
import { ExperienceTypeComponent } from './components/experience-hosting/forms/experience-type/experience-type.component';
import { ExperienceYourLanguagesComponent } from './components/experience-hosting/forms/experience-your-languages/experience-your-languages.component';
import { ExperienceYourBackgroundComponent } from './components/experience-hosting/forms/experience-your-background/experience-your-background.component';
import { ExperienceAboutYouComponent } from './components/experience-hosting/forms/experience-about-you/experience-about-you.component';
import { ExperienceWhatWillYouDoComponent } from './components/experience-hosting/forms/experience-what-will-you-do/experience-what-will-you-do.component';
import { ExperienceDescribeEachPlaceComponent } from './components/experience-hosting/forms/experience-describe-each-place/experience-describe-each-place.component';
import { ExperienceWhatIWillProvideComponent } from './components/experience-hosting/forms/experience-what-iwill-provide/experience-what-iwill-provide.component';
import { ExperienceGuestsShouldBringComponent } from './components/experience-hosting/forms/experience-guests-should-bring/experience-guests-should-bring.component';
import { ExperienceTitleComponent } from './components/experience-hosting/forms/experience-title/experience-title.component';
import { ExperiencePhotosComponent } from './components/experience-hosting/forms/experience-photos/experience-photos.component';
import { ExperienceMapComponent } from './components/experience-hosting/forms/experience-map/experience-map.component';
import { ExperienceNotesComponent } from './components/experience-hosting/forms/experience-notes/experience-notes.component';
import { ExperienceGuestsRequirementsComponent } from './components/experience-hosting/forms/experience-guests-requirements/experience-guests-requirements.component';
import { ExperienceGuestsSizeComponent } from './components/experience-hosting/forms/experience-guests-size/experience-guests-size.component';
import { ExperienceGuestsDurationComponent } from './components/experience-hosting/forms/experience-guests-duration/experience-guests-duration.component';
import { ExperienceGuestsPricingComponent } from './components/experience-hosting/forms/experience-guests-pricing/experience-guests-pricing.component';
import { ExperienceGuestsBookingComponent } from './components/experience-hosting/forms/experience-guests-booking/experience-guests-booking.component';
import { ExperienceSubmitReviewComponent } from './components/experience-hosting/forms/experience-submit-review/experience-submit-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  
  { path: '', component: MainComponent },

  { path: 's/all',pathMatch: 'full', component: MainComponent },

  { path: 's/diveboards', component: SDiveboardsComponent, children: [
    { path: ':name', component: SDiveboardsComponent }
    //{ path: 'xxxx', component: SDiveboardsComponent }
  ] },
  { path: 's/adventures', component: SAdventuresComponent, children: [
    { path: ':name', component: SAdventuresComponent }
    //{ path: 'xxxx', component: SAdventuresComponent }
  ] },
  { path: 's/experiences', component: SExperiencesComponent, children: [
    { path: ':name', component: SExperiencesComponent }
    //{ path: 'xxxx', component: SExperiencesComponent }
  ] },
  { path: 's/destinations', component: SDestinationsComponent, children: [
    { path: ':name', component: SDestinationsComponent }
    //{ path: 'xxxx', component: SDestinationsComponent }
  ] },
  
  { path: 's/gear', component: SGearComponent },

  { path: 'help', component: HelpComponent },
  { path: 'help/advice', component: HelpAdviceComponent },
  { path: 'help/communities', component: HelpCommunitiesComponent },
  { path: 'help/environment', component: HelpEnvironmentComponent },
  { path: 'help/agencies', component: HelpAgenciesComponent },
  { path: 'help/gear', component: HelpGearComponent },
  { path: 'help/marine-life', component: HelpMarineLifeComponent },
  { path: 'help/travelling', component: HelpTravellingComponent },

  { path: 'glogs/:name/:name/:id', component: GlogsComponent },
  
  { path: 'about-us', component: AboutusComponent },  
  { path: 'contact-us', component: ContactusComponent },  
  { path: 'privacy', component: PrivacyComponent },  
  { path: 'terms', component: TermsComponent },
   
  { path: 'login', component: LoginComponent },   
  { path: 'login/forgot-password', component: LoginForgotComponent },   
  { path: 'login/reset-password', component: LoginResetComponent }, 

  { path: 'signup', component: SignupComponent },

  { path: 'experiences/:id', component: ExperiencesComponent },
  { path: 'gear/:name/:name', component: GearComponent },
  { path: 'destination/:id', component: DestinationComponent },

  { path: 'u/show/:id', component: UShowComponent },

  { path: 'site-map', component: SiteMapComponent },

  //--- MyGuard ---//
  //{ path:  '??', canActivate:[MyGuard], component:  ??Component},
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'saved', component: SavedComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'inbox/:id', component: InboxComponent },

  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'account-settings/personal-information', component: AccountSettingsPersonalInfoComponent },
  { path: 'account-settings/login-security', component: AccountSettingsLoginSecurityComponent },
  { path: 'account-settings/payments-payouts', component: AccountSettingsPaymentsPayoutsComponent },
  { path: 'account-settings/notifications', component: AccountSettingsNotificationsComponent },
  { path: 'account-settings/preferences', component: AccountSettingsPreferencesComponent },

  { path: 'payments/book/view-rules', component: PaymentsComponent },
  { path: 'payments/book/guests', component: PaymentsGuestsComponent },
  { path: 'payments/book/confirm', component: PaymentsConfirmComponent },
  { path: 'payments/book/authorise', component: PaymentsAuthoriseComponent },

  { path: 'reviews/:name/:id', component: ReviewsComponent },

  { path: 'experience-hosting/create', component: ExperienceHostingCreateComponent },
  { path: 'experience-hosting/listings', component: ExperienceHostingComponent },
  { path: 'experience-hosting/listings/:id/location', component: ExperienceLocationComponent },
  { path: 'experience-hosting/listings/:id/type', component: ExperienceTypeComponent },
  { path: 'experience-hosting/listings/:id/your-languages', component: ExperienceYourLanguagesComponent },
  { path: 'experience-hosting/listings/:id/your-background', component: ExperienceYourBackgroundComponent },
  { path: 'experience-hosting/listings/:id/about-you', component: ExperienceAboutYouComponent },
  { path: 'experience-hosting/listings/:id/what-will-you-do', component: ExperienceWhatWillYouDoComponent },
  { path: 'experience-hosting/listings/:id/describe-each-place', component: ExperienceDescribeEachPlaceComponent },
  { path: 'experience-hosting/listings/:id/what-i-will-provide', component: ExperienceWhatIWillProvideComponent },
  { path: 'experience-hosting/listings/:id/guests-should-bring', component: ExperienceGuestsShouldBringComponent },
  { path: 'experience-hosting/listings/:id/experience-title', component: ExperienceTitleComponent },
  { path: 'experience-hosting/listings/:id/experience-photos', component: ExperiencePhotosComponent },
  { path: 'experience-hosting/listings/:id/experience-map', component: ExperienceMapComponent },
  { path: 'experience-hosting/listings/:id/experience-notes', component: ExperienceNotesComponent },
  { path: 'experience-hosting/listings/:id/experience-requirements', component: ExperienceGuestsRequirementsComponent },
  { path: 'experience-hosting/listings/:id/experience-size', component: ExperienceGuestsSizeComponent },
  { path: 'experience-hosting/listings/:id/experience-duration', component: ExperienceGuestsDurationComponent },
  { path: 'experience-hosting/listings/:id/experience-pricing', component: ExperienceGuestsPricingComponent },
  { path: 'experience-hosting/listings/:id/experience-booking', component: ExperienceGuestsBookingComponent },
  { path: 'experience-hosting/listings/:id/submit-review', component: ExperienceSubmitReviewComponent },

  //--- Placed at end ---//
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/