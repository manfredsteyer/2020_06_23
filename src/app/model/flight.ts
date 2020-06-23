

export interface Flight {

    id: number;
    from: string;
    to: string;
    date: string; // JSON --> String im ISO, 2020-12-24T17:00+01:00
    delayed: boolean;

}