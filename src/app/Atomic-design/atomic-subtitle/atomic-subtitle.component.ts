import { Component, Input, Optional } from '@angular/core';

@Component({
  selector: 'app-atomic-subtitle',
  templateUrl: './atomic-subtitle.component.html',
  styleUrls: ['./atomic-subtitle.component.scss']
})
export class AtomicSubtitleComponent {

  @Input() title = '';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() align: 'center' | 'left' | 'right' = 'left';
  @Optional ()
  @Input () dynamicMarginBottom: number = 15
}
