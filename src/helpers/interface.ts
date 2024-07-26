export enum Status {
    Para_hacer = 'Para_hacer',
    En_progreso = 'En_progreso',
    Hecho = 'Hecho'
}

export interface Itask {
    id: number
    title: string
    description: string
    status: Status
}