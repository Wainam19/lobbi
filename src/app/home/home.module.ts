import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { Advertise2Component } from './advertise2/advertise2.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FaqComponent } from './faq/faq.component';
import { FollowingComponent } from './following/following.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    BannerComponent,
    AdvertiseComponent,
    Advertise2Component,
    NewsletterComponent,
    FaqComponent,
    FeedbackComponent,
    FollowingComponent,
    InfoComponent,
    FooterComponent
  ]
})
export class HomePageModule {}
