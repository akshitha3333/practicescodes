import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
