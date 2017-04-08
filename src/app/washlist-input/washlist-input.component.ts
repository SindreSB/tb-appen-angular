import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MdSlideToggleChange } from '@angular/material';
import { GenerateWashlistParams } from '../shared/models';

@Component({
  selector: 'tb-washlist-input',
  templateUrl: './washlist-input.component.html',
  styleUrls: ['./washlist-input.component.css']
})
export class WashlistInputComponent implements OnInit {

  @Input() value: GenerateWashlistParams;
  @Output() onGenerate = new EventEmitter<GenerateWashlistParams>();

  showAdvanced = false;


  constructor() {
    if (this.value === null || this.value === undefined) {
      console.log(this.value);
      this.value = new GenerateWashlistParams();
      this.value.startDate = new Date();
      this.value.endDate = new Date();
      this.value.beginWithRoom = {roomNumber: 201};

    }
  }

  ngOnInit() {
  }

  showAdvancedToggled(event: MdSlideToggleChange) {
    this.showAdvanced = event.checked;
  }

  onGenerateClicked() {
    // Gather up the values and...
    // console.log(this.value);
    // Emit!
    this.onGenerate.emit(this.value);
  }

  updateStartdate(event) {
    this.value.startDate = new Date(event);
  }

  updateEnddate(event) {
    this.value.endDate = new Date(event);
  }

  updateRoomnumber(event) {
    this.value.beginWithRoom = {roomNumber: event};
  }

}
