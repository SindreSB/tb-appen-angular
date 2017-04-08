import { Component, Input } from '@angular/core';
import { WashdayAssignment } from '../shared/models';

@Component({
  selector: 'tb-next-washday',
  templateUrl: './next-washday.component.html',
  styleUrls: ['./next-washday.component.css']
})
export class NextWashdayComponent  {

  @Input() nextWashday: WashdayAssignment;

  constructor() { }
}
