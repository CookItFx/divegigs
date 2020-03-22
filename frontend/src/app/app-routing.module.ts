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

import { ExperienceHostingComponent } from './components/experience-hosting/experience-hosting.component';

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

  { path: '', component: ExperienceHostingComponent },

  //--- MyGuard ---//
  //{ path:  '??', canActivate:[MyGuard], component:  ??Component},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experience-hosting', component: ExperienceHostingComponent },
  
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