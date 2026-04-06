import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './pages/parent/parent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assessment-2');
}
