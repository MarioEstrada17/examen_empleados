import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';

@Component({
  selector: 'app-atomic-button',
  templateUrl: './atomic-button.component.html',
  styleUrls: ['./atomic-button.component.scss']
})
export class AtomicButtonComponent {

  @Output() emitAction = new EventEmitter();
  @Input() typeButton: 'complete' | 'w80' | 'padding' = 'complete';
  @Input() icon: string = '';
  isDisabled = false;
  @Optional()
  @Input() set disabled(value: boolean) {
    this.isDisabled = value;
  }
  @Input() titleButton: string = '';
  rippleColor = '#8dcd8d';
  @Optional ()
  @Input () color: 'primary' | 'secondary' = 'primary';

  action(): void {
    this.emitAction.emit();
  }
}
