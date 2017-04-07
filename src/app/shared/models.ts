
export interface Rental {
    rentalId?: number;
    userId?: string;
    roomNumber?: number;
    movedIn?: Date;
    movedOut?: Date;
}

export interface PostRental {
    roomNumber: number;
    movedIn: Date;
}

export interface RentalResponse {
    rental: Rental;
}

export interface HighscoreResult {
    highscore: HighscoreEntry[];
}

export interface HighscoreEntry {
    roomNumber: number;
    points: number;
}

export interface PointsThisWeekResponse {
    points: number;
}

export interface PostPoint {
    date: Date;
    action: string;
}

export interface Room {
    roomNumber: number;
}

export interface IGenerateWashlistParams {
    startDate: Date;
    endDate: Date;
    beginWithRoom: Room;
    prioritizeRooms: Room[];
    skipRooms: Room[];
}

export class GenerateWashlistParams {
    startDate: Date;
    endDate: Date;
    beginWithRoom: Room;
    prioritizeRooms: Room[];
    skipRooms: Room[];

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

export interface WashlistResponse {
    washdayassignments: WashdayAssignment[];
}

export interface KitchenPoint {
    kitchenPointId?: number;
    date?: Date;
    roomNumber?: number;
    action?: string;
}
