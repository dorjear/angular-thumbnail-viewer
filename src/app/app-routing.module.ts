import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Thumbs} from "./thumbs/thumbs.component";

const routes: Routes = [
  { path: '', redirectTo: 'textEditors', pathMatch: 'full' },
  { path: 'textEditors', component: Thumbs },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
