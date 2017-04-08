import { Injectable } from '@angular/core';
import { IGenerateWashlistParams, WashdayAssignment } from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { API_ENDPOINT } from '../settings';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  public washlist: Subject<any> = new Subject();

  constructor(private authHttp: AuthHttp) { }

  public generateWashlist(params: IGenerateWashlistParams): Observable<WashdayAssignment[]> {
        const apiEndpoint = 'WashdayAssignments/Generate';

        // TODO: Add error loggin
        this.authHttp.post(API_ENDPOINT + apiEndpoint, JSON.stringify(params))
            .subscribe(
            data => {
                const responseObject = <WashdayAssignment[]>data.json();
                this.washlist.next(responseObject);
            }
            );
        return this.washlist;
    }
}
