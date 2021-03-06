import { WashdayAssignment } from '../models';

export enum Task {
    ONE = 1,
    TWO = 2
}

export class CleaningAssignments {
    taskOne: WashdayAssignment;
    taskTwo: WashdayAssignment;

    constructor(assignments: WashdayAssignment[]) {
        this.taskOne = assignments.find(assignment => assignment.assignment === Task.ONE);
        this.taskTwo = assignments.find(assignment => assignment.assignment === Task.TWO);

        if (this.taskOne === undefined) {
            this.taskOne = new WashdayAssignment();
        }
        if (this.taskTwo === undefined) {
            this.taskTwo = new WashdayAssignment();
        }
    }
}
