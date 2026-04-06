import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '../child2/data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child2',
  imports: [FormsModule],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {

  @Input() details: Data[] = [];
  @Input() activeEditIndex: number | null = null; 

  @Output() editData = new EventEmitter<number>();
  @Output() deleteData = new EventEmitter<number>();

  edit(index: number) {
    this.editData.emit(index);
  }

  delete(index: number) {
    this.deleteData.emit(index);
  }

}
