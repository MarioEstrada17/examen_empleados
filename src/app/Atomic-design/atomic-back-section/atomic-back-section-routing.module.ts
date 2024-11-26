import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomicBackSectionComponent } from './atomic-back-section.component';

const routes: Routes = [
  {path: '', component: AtomicBackSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtomicBackSectionRoutingModule { }
