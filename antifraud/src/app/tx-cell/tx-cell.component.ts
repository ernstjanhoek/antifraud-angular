import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tx-cell',
  standalone: true,
  imports: [],
  templateUrl: './tx-cell.component.html',
  styleUrl: './tx-cell.component.css'
})

export class TxCellComponent {
  @Input() transactionId!: number;
  @Input() amount!: number;
  @Input() ip!: string;
  @Input() number!: string;
  @Input() region!: string;
  @Input() date!: Date;
  @Input() result!: string;
}
