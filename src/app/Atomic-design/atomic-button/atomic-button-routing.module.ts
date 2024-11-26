import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomicButtonComponent } from './atomic-button.component';

const routes: Routes = [
  {path: '', component: AtomicButtonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtomicButtonRoutingModule { }
