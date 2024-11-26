import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomicSubtitleComponent } from './atomic-subtitle.component';

const routes: Routes = [
  {path: '', component: AtomicSubtitleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtomicSubtitleRoutingModule { }
