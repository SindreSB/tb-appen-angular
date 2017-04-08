import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WashdayAssignment } from '../shared/models';

@Component({
  selector: 'tb-washlist-generator',
  templateUrl: './washlist-generator.component.html',
  styleUrls: ['./washlist-generator.component.css']
})
export class WashlistGeneratorComponent implements OnInit {

  washlist: WashdayAssignment[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  generateWashlist(params) {
    this.apiService.generateWashlist(params).subscribe(result => {
      this.washlist = result;
    }, error => {
      // TODO: Surface error as toast
    });
  }

}
