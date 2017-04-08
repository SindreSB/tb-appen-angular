import { Weekday, Week } from '../core/week';
import { Task, CleaningAssignments } from './cleaning-assignment';
import { WashdayAssignment } from '../models';

export class CleaningWeek extends Week {

    private cleaningAssignments: WashdayAssignment[];

    constructor(dayInWeek: Date) {
        super(dayInWeek);
        this.cleaningAssignments = [];

        // console.log('Constructing Cleaningweek with: ' + dayInWeek);
    }

    public addAssignment(assignment: WashdayAssignment, replaceIfExist = false): boolean {
        // console.log('Adding assignment to list: ' + this.firstDayOfWeek);
        if (!super.isDateInWeek(assignment.date)) { return false; }

        const day: Weekday = (new Date(assignment.date)).getDay();
        const task: Task = assignment.assignment;

        // If there is al
        if (this.isAlreadyAssigned(day, task)) {
            if (replaceIfExist) {
                const id = this.cleaningAssignments.indexOf(this.getAssignment(day, task));
                this.cleaningAssignments.splice(id, 1);
            } else {
                return false;
            }
        }

        this.cleaningAssignments.push(assignment);
        return true;
    }

    public getAssignment(day: Weekday, task: Task): WashdayAssignment {
        return this.cleaningAssignments.filter(assignment => {
            return (new Date(assignment.date)).getDay() === day.valueOf() && assignment.assignment === task.valueOf();
        })[0];
    }

    public getAssignmentsByTask(task: Task): WashdayAssignment[] {
        return this.cleaningAssignments.filter(assignment => assignment.assignment === task.valueOf());
    }

    public getAssignmentsByDay(day: Weekday): WashdayAssignment[] {
        return this.cleaningAssignments.filter(assignment => (new Date(assignment.date)).getDay() === day.valueOf());
    }

    public getCleaningAssignmentForDay(day: Weekday): CleaningAssignments {
        const assignments = this.cleaningAssignments.filter(assignment => (new Date(assignment.date)).getDay() === day.valueOf());
       return new CleaningAssignments(assignments);
    }

    private isDayFull(day: Weekday): boolean {
        return this.getAssignmentsByDay(day).length === 2;
    }

    private isAlreadyAssigned(day: Weekday, task: Task): boolean {
        return this.getAssignment(day, task) !== undefined;
    }
}
