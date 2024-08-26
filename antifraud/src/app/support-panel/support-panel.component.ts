import {Component, inject} from '@angular/core';
import {SupportService} from "../support.service";

@Component({
  selector: 'app-support-panel',
  standalone: true,
  imports: [],
  templateUrl: './support-panel.component.html',
  styleUrl: './support-panel.component.css'
})
export class SupportPanelComponent {
  supportService: SupportService = inject(SupportService);


}
