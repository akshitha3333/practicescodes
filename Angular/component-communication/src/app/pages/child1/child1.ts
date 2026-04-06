import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Data } from '../child2/data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 implements OnChanges {
  name: string = '';
  phone: string = '';
  email: string = '';

  @Input() editIndex: number | null = null;     
  @Input() editItem: Data | null = null;          

  @Output() saveEntry = new EventEmitter<{ index: number | null; data: Data }>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editItem'] && this.editItem) {
      this.name = this.editItem.name;
      this.phone = this.editItem.phone;
      this.email = this.editItem.email;
    }
  }

  saveData() {
    const detail: Data = { name: this.name, phone: this.phone, email: this.email };
    this.saveEntry.emit({ index: this.editIndex, data: detail });
    this.clearData();
  }

  clearData() {
    this.name = '';
    this.phone = '';
    this.email = '';
  }
}