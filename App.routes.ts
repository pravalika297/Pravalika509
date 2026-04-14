import { Routes } from '@angular/router';
import { Home } from './home/home';       
import { Profile } from './profile/profile'; 

// This 'export' keyword is the most important part!
export const routes: Routes = [
  { 
    path: '', 
    component: Home, 
    title: 'Home' 
  },
  { 
    path: 'profile', 
    component: Profile, 
    title: 'Profile' 
  }
];                                                        
