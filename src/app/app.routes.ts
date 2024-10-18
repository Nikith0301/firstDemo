import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ArtistsComponent } from './artists/artists.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },//dont keep /about it ruins the whole thing
    { path: 'contacts', component: ContactsComponent },
    {path:'artists',component:ArtistsComponent}
  
];
