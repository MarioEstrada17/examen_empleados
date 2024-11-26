import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtomicTableComponent } from './atomic-table.component';

const routes: Routes = [
  {path: '', component: AtomicTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtomicTableRoutingModule { }
