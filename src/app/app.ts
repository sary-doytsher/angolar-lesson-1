import { Component, signal } from '@angular/core';
import { Identity } from './identity/identity';

@Component({
  selector: 'app-root',
  imports: [Identity],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson1');
}
