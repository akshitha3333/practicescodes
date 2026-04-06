import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { Data } from '../child2/data';

@Component({
  selector: 'app-parent',
  imports: [Child1, Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  data: Data[] = [];             
  editIndex: number | null = null;
  editItem: Data | null = null;

  onSaveEntry(event: { index: number | null; data: Data }) {
    if (event.index === null) {
      this.data = [...this.data, event.data];     
    } else {
      const updated = [...this.data];
      updated[event.index] = event.data;
      this.data = updated;                          
      this.editIndex = null;
      this.editItem = null;
    }
  }

  onEditData(index: number) {
    this.editIndex = index;
    this.editItem = this.data[index];  
  }

  onDeleteData(index: number) {
    this.data = this.data.filter((_, i) => i !== index);
    if (this.editIndex === index) {    
      this.editIndex = null;
      this.editItem = null;
    }
  }
}