import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Main Component
import { Viewer } from './viewer/viewer.component';
import { Thumbs } from './thumbs/thumbs.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route
  { path: 'viewer', component: Viewer },
  { path: 'thumbs', component: Thumbs }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
