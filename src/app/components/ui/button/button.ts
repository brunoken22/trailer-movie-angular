import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app_button',
  templateUrl: './button.html',
})
export class ButttonComponent {
  @Input() title = '';
}
