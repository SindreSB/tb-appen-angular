import { Injectable } from '@angular/core';
import {
    IGenerateWashlistParams,
    WashdayAssignment,
    IHighscoreResult,
    IPostRental,
    IRentalResponse,
    IRental,
    IPointsThisWeekResponse,
    IPostPoint,
    IHighscoreEntry
} from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { API_ENDPOINT } from '../settings';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  constructor(private authHttp: AuthHttp) { }


    /* ####################################################################################
    Washlist
    ######################################################################################*/

    public generateWashlist(params: IGenerateWashlistParams): Observable<WashdayAssignment[]> {
        const apiEndpoint = 'WashdayAssignments/Generate';

        // TODO: Add error logging
        return this.authHttp.post(API_ENDPOINT + apiEndpoint, JSON.stringify(params))
            .map(data => <WashdayAssignment[]>data.json());
    }


    /* ####################################################################################
    Points system
    ######################################################################################*/

    public pointsForUser: ReplaySubject<number> = new ReplaySubject<number>(1);

    public getPointsForUser(): Observable<number> {
        const apiEndpoint = 'KitchenPoints/PointsThisWeek';
        this.authHttp.get(API_ENDPOINT + apiEndpoint)
                    .map(response => <IPointsThisWeekResponse>response.json())
                    .map(poinstResponse => poinstResponse.points)
                    .subscribe(success => this.pointsForUser.next(success));

        return this.pointsForUser;
    }

    public postPointForUser(action: string): Observable<number> {
        const apiEndpoint = 'KitchenPoints';
        const point: IPostPoint = {date: new Date(), action: action};

        this.authHttp.post(API_ENDPOINT + apiEndpoint, JSON.stringify(point))
                    .map(response => <IPointsThisWeekResponse>response.json())
                    .map(response => response.points)
                    .subscribe(success => this.pointsForUser.next(success));

        return this.pointsForUser;
    }

    public getTopFive(): Observable<IHighscoreEntry[]> {
        const apiEndpoint = 'KitchenPoints/HighscoreThisWeek/5';
        return this.authHttp.get(API_ENDPOINT + apiEndpoint)
            .map<any, IHighscoreResult>(res => <IHighscoreResult>res.json())
            .map<IHighscoreResult, IHighscoreEntry[]>(res => res.highscore);
    }

    /* ####################################################################################
    Rentals and roomnumber related querys
    ######################################################################################*/

    public registerRental(roomnumber: number, movedIn: Date = new Date()): Observable<IRental> {
        const apiEndpoint = 'Rentals';

        const body: IPostRental = {roomNumber: roomnumber, movedIn: movedIn};

        return this.authHttp.post(API_ENDPOINT + apiEndpoint, JSON.stringify(body))
                            .map<any, IRentalResponse>(response => <IRentalResponse>response.json())
                            .map<IRentalResponse, IRental>(rentalRespone => rentalRespone.rental);
    }

    public getRoomnumber(): Observable<number> {
        const apiEndpoint = 'Rentals';
        return this.authHttp.get(API_ENDPOINT + apiEndpoint)
            .map<any, IRentalResponse>(response => <IRentalResponse>response.json())
            .map<IRentalResponse, number>(rentalRespone => rentalRespone.rental.roomNumber);
    }

}
