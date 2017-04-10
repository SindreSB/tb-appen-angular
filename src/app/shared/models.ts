
export interface IRental {
    rentalId?: number;
    userId?: string;
    roomNumber?: number;
    movedIn?: Date;
    movedOut?: Date;
}

export interface IPostRental {
    roomNumber: number;
    movedIn: Date;
}

export interface IRentalResponse {
    rental: IRental;
}

export interface IHighscoreResult {
    highscore: IHighscoreEntry[];
}

export interface IHighscoreEntry {
    roomNumber: number;
    points: number;
}

export interface IPointsThisWeekResponse {
    points: number;
}

export interface IPostPoint {
    date: Date;
    action: string;
}

export interface IRoom {
    roomNumber: number;
}

export interface IGenerateWashlistParams {
    startDate: Date;
    endDate: Date;
    beginWithRoom: IRoom;
    prioritizeRooms: IRoom[];
    skipRooms: IRoom[];
}

export class GenerateWashlistParams {
    startDate: Date;
    endDate: Date;
    beginWithRoom: IRoom;
    prioritizeRooms: IRoom[];
    skipRooms: IRoom[];

    constructor() { }
}

export class WashdayAssignment {
    washdayAssignmentId?: number;
    date?: Date;
    assignment?: number;
    roomNumber?: number;
    completedAt?: Date;
    completedBy?: string;
    accepted?: boolean;

    constructor() {}
}

export interface IWashlistResponse {
    washdayassignments: WashdayAssignment[];
}

export interface IKitchenPoint {
    kitchenPointId?: number;
    date?: Date;
    roomNumber?: number;
    action?: string;
}
