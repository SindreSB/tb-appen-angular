import { Injectable } from '@angular/core';
import {
    IGenerateWashlistParams,
    WashdayAssignment,
    HighscoreResult
} from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { API_ENDPOINT } from '../settings';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  public washlist: ReplaySubject<any> = new ReplaySubject(1);
  public highscoreResult: ReplaySubject<any> = new ReplaySubject(1);

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


    public getTopFive(): Observable<any> {
        const apiEndpoint = 'KitchenPoints/HighscoreThisWeek/5';
        this.authHttp.get(API_ENDPOINT + apiEndpoint)
            .subscribe(res => {
                const highscoreResponse = <HighscoreResult>res.json();
                this.highscoreResult.next(highscoreResponse.highscore);
            },
            error => console.log(error));
        return this.highscoreResult;
    }
}
