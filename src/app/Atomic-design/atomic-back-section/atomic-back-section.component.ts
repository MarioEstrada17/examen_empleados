import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atomic-back-section',
  templateUrl: './atomic-back-section.component.html',
  styleUrls: ['./atomic-back-section.component.scss']
})
export class AtomicBackSectionComponent {

  @Input () title = '';

  constructor(
    private router: Router
  ) {}

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
