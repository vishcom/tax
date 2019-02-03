import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './navigation-bar/nav-bar/nav-bar.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesListComponent } from './services-list/services-list/services-list.component';



const appRoutes: Routes = [
  { path:"taxArena",component: CarouselComponent},
  { path:"gallery",component: GalleryComponent},
  { path:"services",component: ServicesOfferedComponent},
  { path:"contact-us",component: ContactUsComponent},
  { path: '',redirectTo: '/taxArena',pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CarouselComponent,
    NavBarComponent,
    ServicesOfferedComponent,
    ContactUsComponent,
    ServicesListComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
