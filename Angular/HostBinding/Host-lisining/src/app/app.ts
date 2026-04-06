import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [
    Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 users=[
  {
    name:"Akshu",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  },
   {
    name:"Kichu",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  },
   {
    name:"Vyshu",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  },
   {
    name:"Mahi",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  },
   {
    name:"Harsha",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  },
  {
    name:"Harsh",
    About:"erthhbvcd edrtyhbvfd sdfghb",
    company:"GVS india pvt ltd"
  }
 ]
 active=false
 mouseEnter(){
  this.active=true
 }
 mouseLeave(){
  this.active=false
 }
}
