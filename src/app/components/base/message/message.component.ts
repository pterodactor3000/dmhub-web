import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { MessageAttributes } from '@definitions/types';

@Component({
  selector: 'wbhb-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  @Input() messageAttributes!: MessageAttributes;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
