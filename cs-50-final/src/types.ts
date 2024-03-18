export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR', 
}

export type EventData = {
    name: string;
    type: string;
    id: string;
    url: string;
    place: {
        city: string
    }
    dates: {
        start: {
            localDate: string;
            localTime: string;
        }
    }
    accessibility: {
        info: string;
    }

    // name: string;
    // url: string;
    // id: string;
}

export {};