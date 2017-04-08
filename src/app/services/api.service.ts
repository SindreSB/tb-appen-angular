import { Injectable } from '@angular/core';
import { IGenerateWashlistParams, WashdayAssignment } from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { API_ENDPOINT } from '../settings';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  public washlist: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private authHttp: AuthHttp) { }

  public generateWashlist(params: IGenerateWashlistParams): Observable<WashdayAssignment[]> {
        const apiEndpoint = 'WashdayAssignments/Generate';

        this.authHttp.post(API_ENDPOINT + apiEndpoint, JSON.stringify(params))
            .subscribe(
            data => {
                console.log('Recieved back: ' + data);
                const responseObject = <WashdayAssignment[]>data.json();
                this.washlist.next(responseObject);
            },
            err => console.log(err)
            );
        return this.washlist;
    }
}
