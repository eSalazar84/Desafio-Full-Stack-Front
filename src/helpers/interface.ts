export enum Status {
    to_do = 'to_do',
    in_progress = 'in_progress',
    done = 'done'
}

export interface Itask {
    id: number
    title: string
    description: string
    status: Status
}