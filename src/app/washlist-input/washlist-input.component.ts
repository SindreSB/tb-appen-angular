import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MdSlideToggleChange } from '@angular/material';
import { GenerateWashlistParams } from '../shared/models';

@Component({
  selector: 'tb-washlist-input',
  templateUrl: './washlist-input.component.html',
  styleUrls: ['./washlist-input.component.css']
})
export class WashlistInputComponent implements OnInit {

  @Input() paramValue: GenerateWashlistParams;
  @Input() showSaveButton: boolean;
  @Output() onGenerate = new EventEmitter<GenerateWashlistParams>();
  @Output() saveClicked = new EventEmitter();

  showAdvanced = false;
  prioritizeRoom = '';
  skipRooms = '';

  constructor() {
    if (this.paramValue === null || this.paramValue === undefined) {
      this.paramValue = new GenerateWashlistParams();
      this.paramValue.startDate = new Date();
      this.paramValue.endDate = new Date();
      this.paramValue.beginWithRoom = {roomNumber: 201};

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
    //this.value.prioritizeRooms = this.prioritizeRooms.split(' ,').map(room => { return {'roomNumber': Number.parseInt(room)}; });
    //this.value.skipRooms = this.skipRooms.split(' ,').map(room => { return {'roomNumber': Number.parseInt(room)}; });
    console.log(this.paramValue);
    this.onGenerate.emit(this.paramValue);
  }

  onSaveClicked() {
    this.saveClicked.emit();
  }

  updateStartdate(event) {
    this.paramValue.startDate = new Date(event);
  }

  updateEnddate(event) {
    this.paramValue.endDate = new Date(event);
  }

  updateRoomnumber(event) {
    this.paramValue.beginWithRoom = {roomNumber: event};
  }

  updatePrioritizedRooms(event: KeyboardEvent, sender) {
    if (event.key === ' ' || event.key === ',') {
      const numberString = sender.value.slice(0, 3);
      sender.value = null;
      const roomnumber = Number.parseInt(numberString);
      if (roomnumber !== NaN) {
        this.paramValue.prioritizeRooms.push({'roomNumber': roomnumber});
      }
      this.prioritizeRoom = ' ';
      this.prioritizeRoom = '';
    }
  }

  updateSkippedRooms(event: KeyboardEvent, sender) {
    if (event.key === ' ' || event.key === ',') {
      const numberString = sender.value.slice(0, 3);
      sender.value = null;
      const roomnumber = Number.parseInt(numberString);
      if (roomnumber !== NaN) {
        this.paramValue.skipRooms.push({'roomNumber': roomnumber});
      }
    }
  }

}
