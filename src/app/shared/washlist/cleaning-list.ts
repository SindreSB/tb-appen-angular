import { CleaningWeek } from './cleaning-week';
import { WashdayAssignment } from '../models';
import { getFirstDayOfWeek } from '../core/week';

export class CleaningList {

    weekLists: CleaningWeek[];

    constructor(assignments?: WashdayAssignment[]) {
        this.weekLists = [];
        if (assignments !== null) {
            this.addAssignments(assignments);
        }
    }

    addAssignments(assignments: WashdayAssignment[]): void {
        // Classify by year and week
        // console.log('About to add: ' + assignments);
        assignments.forEach(element => {
            this.addAssignment(element);
        });
    }

    addAssignment(assignment: WashdayAssignment): void {
        // console.log('Adding: ' + assignment);
        if (this.hasListForDate(assignment.date)) {
            // console.log('Existing list:' + this.getListForDate(assignment.date));
            this.getListForDate(assignment.date).addAssignment(assignment);
        } else {
            const newWeek = new CleaningWeek(assignment.date);
            // console.log('New list:' + newWeek);
            newWeek.addAssignment(assignment);
            this.weekLists.push(newWeek);
        }
    }

    getCleaningLists(): CleaningWeek[] {
        return this.weekLists;
    }

    getWashdayAssignments(): WashdayAssignment[] {
        return this.getCleaningLists()
                .map(list => list.getWashdayAssignments())
                .reduce((previous, next) => previous.concat(next), []);
    }

    hasListForDate(date: Date) {
        date = new Date(date);
        // console.log('---------------------------');
        // console.log('Trying to find list for: ' + date);
        // console.log('Found: ' + JSON.stringify(this.getListForDate(date)));
        // console.log('---------------------------');
        return this.getListForDate(date) !== undefined;
    }

    getListForDate(date: Date): CleaningWeek {
        date = new Date(date);
        const weekOf = getFirstDayOfWeek(date);

        return this.weekLists.find(week => {
            const datesAreEqual = (new Date(week.firstDayOfWeek)).valueOf() === (new Date(weekOf)).valueOf();
            // console.log('---------------------------');
            // console.log('Weekof for comp: ' + weekOf);
            // console.log('First day for comp: ' + week.firstDayOfWeek);
            // console.log('Comparison is: ' + datesAreEqual);
            // console.log('---------------------------');
            return datesAreEqual;
        });
    }

}
