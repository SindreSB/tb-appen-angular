export class Week {

    public firstDayOfWeek: Date;

    public weeknumber: number;
    public year: number;

    constructor(dateInWeek: Date) {
        dateInWeek = new Date(dateInWeek);
        this.firstDayOfWeek = getFirstDayOfWeek(dateInWeek);
        this.weeknumber = getWeekNumber(this.firstDayOfWeek);
        this.year = this.firstDayOfWeek.getFullYear();
        console.log('------------------');
        console.log(this.firstDayOfWeek);
        console.log(this.weeknumber);
        console.log(this.year);
        console.log('------------------');
    }

    /**
     * isDateInWeek
     */
    public isDateInWeek(date: Date) {
        date = new Date(date);
        const sameYear =  this.year === date.getFullYear();
        const sameWeeknumber = this.weeknumber === getWeekNumber(date);
        return sameYear && sameWeeknumber;
    }

}

export enum Weekday {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}


export function getWeekNumber(date: Date): number {
    date = new Date(date);
    const janFirst = new Date(date.getFullYear(), 0, 0);
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayOfYear = ((newDate.valueOf() - janFirst.valueOf() + 1) / 86400000);
    return Math.ceil(dayOfYear / 7);
}

export function getFirstDayOfWeek(date: Date): Date {
    date = new Date(date);
    const day = date.getDay();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
}
