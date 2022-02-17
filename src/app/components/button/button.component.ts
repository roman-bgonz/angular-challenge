import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{ 'background-color': color }">
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy {
  @Input() color: string;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
