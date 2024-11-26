import { Component } from '@angular/core';
import { SpinnerService } from '@Services/Spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$ = this.spinner.isLoading$;

  constructor(
    private spinner: SpinnerService
  ) {}
}
