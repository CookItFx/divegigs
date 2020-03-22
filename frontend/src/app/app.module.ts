import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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

import { UShowComponent } from './components/u-show/u-show.component';

import { ExperiencesComponent } from './components/experiences/experiences.component';
import { GearComponent } from './components/gear/gear.component';
import { DestinationComponent } from './components/destination/destination.component';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    SDiveboardsComponent,
    SAdventuresComponent,
    SExperiencesComponent,
    SDestinationsComponent,
    SGearComponent,
    PageNotFoundComponent,
    HelpComponent,
    HelpAdviceComponent,
    HelpCommunitiesComponent,
    HelpEnvironmentComponent,
    HelpAgenciesComponent,
    HelpGearComponent,
    HelpMarineLifeComponent,
    HelpTravellingComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacyComponent,
    TermsComponent,
    LoginComponent,
    LoginForgotComponent,
    LoginResetComponent,
    SignupComponent,
    UShowComponent,
    ExperiencesComponent,
    GearComponent,
    SiteMapComponent,
    ExperienceHostingComponent,
    SavedComponent,
    TripsComponent,
    AccountSettingsComponent,
    AccountSettingsPersonalInfoComponent,
    AccountSettingsLoginSecurityComponent,
    AccountSettingsPaymentsPayoutsComponent,
    AccountSettingsNotificationsComponent,
    AccountSettingsPreferencesComponent,
    DestinationComponent,
    GlogsComponent,
    DashboardComponent,
    PaymentsComponent,
    PaymentsGuestsComponent,
    PaymentsConfirmComponent,
    PaymentsAuthoriseComponent,
    InboxComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsGpM_p_hpaoBrSBTxSzHd7hr3mwfy_r4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.telerik.com/blogs/all-things-angular
//https://material-ui.com/components/grid/
//https://material-ui.com/components/cards/#api
//https://material.angular.io/guide/getting-started
//https://medium.com/@jkeung/integrating-google-maps-api-w-angular-7-e7672396ce2d
//https://alligator.io/angular/angular-google-maps
//https://dev.to/stupidawesome/thinking-reactive-with-angular-effects-1obb?fbclid=IwAR0Gv_cEKWKxM_cnmXMXL9G5WI7xLZ_0-VK09SxtUsQcmOCQm_X-G3dQvV4
